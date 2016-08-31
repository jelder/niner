const default_text = `

Type anything in this box. It will be converted to phonetics. Make yourself understood!

+1 (234) 567-8999
OTM
ABC
WTF

Changes will be saved to your browser's local storage.
`

export const text = (state = default_text, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.text
    default:
      return state
  }
}
