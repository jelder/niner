import React from 'react'
import ModeButton from '../containers/ModeButton'

const Footer = () => (
  <p>
    Show:
    {" "}
    <ModeButton filter="codeword">
      Code Word
    </ModeButton>
    {", "}
    <ModeButton filter="ipa">
      IPA
    </ModeButton>
    {", "}
    <ModeButton filter="faa">
      FAA
    </ModeButton>
  </p>
)

export default Footer
