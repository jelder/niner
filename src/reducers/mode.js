const default_mode = 'faa'
export const mode = (state = default_mode, action) => {
  switch (action.type) {
    case 'SET_MODE':
      return action.mode
    default:
      return state
  }
}
