#!/bin/sh
# PreToolUse hook: Claude が git commit / git push を実行しようとしたらブロックする。
# commit / push はユーザーが自分の手で行う運用にするためのガード。
#
# 標準入力に Claude Code から tool-call の JSON が渡される。
#   { "tool_name": "Bash", "tool_input": { "command": "...", "description": "..." } }
# command を取り出し、git commit / git push を含む場合は deny を返す。

input=$(cat)

command=$(printf '%s' "$input" | python3 -c '
import sys, json
try:
    data = json.load(sys.stdin)
    print(data.get("tool_input", {}).get("command", ""))
except Exception:
    print("")
')

# git commit / git push を検知（複合コマンドや push --force も対象）
if printf '%s' "$command" | grep -Eq '(^|[;&|[:space:]])git[[:space:]]+([^;&|]*[[:space:]])?(commit|push)([[:space:]]|$)'; then
    cat <<'EOF'
{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"git commit / push は Claude による自動実行をブロックしています。コミット・プッシュはユーザーが手動で行ってください（このガードは .claude/hooks/block-git-write.sh です）。"}}
EOF
    exit 0
fi

exit 0
