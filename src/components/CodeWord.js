import React, { PropTypes} from 'react'
import './CodeWord.css'

const CodeWord = (props) => {
  const style = {
    fontFamily: props.mode === "codeword" ? "monospace" : "sans-serif"
  }
  return <span className="CodeWord" style={style} dangerouslySetInnerHTML={{__html: props[props.mode]}}/>
}

CodeWord.propTypes = {
  codeword: PropTypes.string.isRequired,
  faa: PropTypes.string,
  ipa: PropTypes.string,
  mode: PropTypes.string,
}

export default CodeWord