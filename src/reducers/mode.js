export const mode = (state = 'codeword', action) => {
  switch (action.type) {
    case 'SET_MODE':
      return action.mode
    default:
      return state
  }
}
