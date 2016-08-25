import React from 'react'
import ModeLink from '../containers/ModeLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <ModeLink filter="codeword">
      Code Word
    </ModeLink>
    {", "}
    <ModeLink filter="ipa">
      IPA
    </ModeLink>
    {", "}
    <ModeLink filter="faa">
      FAA
    </ModeLink>
  </p>
)

export default Footer
