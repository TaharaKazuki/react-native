const initialState = {
  clip: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        clip: [...state.clip, action.clip]
      }
    case 'DELETE_CLIP':
      return {
        ...state,
        clip: state.clip.filter((clip) => clip.url !== action.clip.url)
      }
    default:
      return state
  }
}

export default reducer