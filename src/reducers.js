export function TextReducer(state = {}, action) {
  // console.log(state, action)
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {...state, text: action.text}
    default:
      return state
  }
}
