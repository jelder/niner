const samples = [
"202-456-1111",
"90.9 FM",
"MAEH08H776",
]

const default_text = `

Make yourself understood!

Translate any text to the NATO Phonetic Alphabet.

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
