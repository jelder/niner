const default_text = `
Translate any text to a phonetic alphabet.

123456789
abc
wtf
`

export const text = (state = default_text, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.text
    default:
      return state
  }
}
