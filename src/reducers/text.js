const default_text = `

Make yourself understood!

Translate any text to the NATO Phonetic Alphabet.

202-456-1111

90.9 FM
`

export const text = (state = default_text, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.text
    default:
      return state
  }
}
