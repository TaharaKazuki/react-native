#!/bin/sh
# PreToolUse hook: Claude が git commit / git push を実行しようとしたら確認を求める。
# 「勝手に」実行されるのを防ぎ、ユーザーが承認したときだけ実行できるようにするガード。
#
# 標準入力に Claude Code から tool-call の JSON が渡される。
#   { "tool_name": "Bash", "tool_input": { "command": "...", "description": "..." } }
# command を取り出し、git commit / git push を含む場合は ask（確認プロンプト）を返す。

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
{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"ask","permissionDecisionReason":"git commit / push を実行しようとしています。「勝手に」実行されるのを防ぐため確認しています。承認すれば実行されます（このガードは .claude/hooks/block-git-write.sh です）。"}}
EOF
    exit 0
fi

exit 0
