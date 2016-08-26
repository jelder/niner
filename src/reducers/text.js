const samples = [
"OV-099",
"202-456-1111 x44",
"90.9 FM",
"MAEH09H776",
]

const default_text = `
Translate any text to a phonetic alphabet.

${samples[Math.floor(Math.random()*samples.length)]}
`

export const text = (state = default_text, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.text
    default:
      return state
  }
}
