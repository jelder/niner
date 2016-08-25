import React from 'react';
import Alphabet from '../alphabet';
import './App.css'

const Result = (props) => {
  const result = props.text.split(/\n+|(\. )/).map((text, index) => <Sentence text={text} key={"sentence_" + index} mode={props.mode}/>)
  return <div className="Result">{result}</div>
}

const Sentence = (props) => {
  const sentence = props.text.split(/([a-zA-Z0-9])/).reduce((prev, value, index, array) => {
    if (value === "") {
      return prev
    } else if (index > 0 && array[index-1].match(/\d/) && value === ".") { // Say "decimal" rather than "stop" following numerics
      return [...prev, <CodeWord {...Alphabet.decimal} key={"codeword_" + index} mode={props.mode}/>]
    } else if (Alphabet.hasOwnProperty(value)) {
      return [...prev, <CodeWord {...Alphabet[value]} key={"codeword_" + index} mode={props.mode}/>]
    } else if (Alphabet.hasOwnProperty(value.toLowerCase())) {
      let codeWordProps = {
        ...Alphabet[value.toLowerCase()],
        codeword: Alphabet[value.toLowerCase()].codeword.toUpperCase(),
        mode: props.mode,
      }
      return [...prev, <CodeWord {...codeWordProps} key={"codeword_" + index}/>]
    } else {
      return [...prev, <OtherText text={value} key={"text_" + index}/>]
    }
  }, [])
  return (sentence.length === 0 ? null : <div className="Sentence">{sentence}</div>)
}
Sentence.PropTypes = {
  text: React.PropTypes.string.isRequired,
  mode: React.PropTypes.string,
}
Sentence.defaultProps = {
  text: "",
  mode: "codeword"
}

const CodeWord = (props) => {
  const style = {
    fontFamily: props.mode === "codeword" ? "monospace" : "sans-serif"
  }
  return <span className="CodeWord" style={style} dangerouslySetInnerHTML={{__html: props[props.mode]}}/>
}

CodeWord.propTypes = {
  codeword: React.PropTypes.string.isRequired,
  faa: React.PropTypes.string,
  ipa: React.PropTypes.string,
  mode: React.PropTypes.string,
}

const NBSP = "\u00a0"
const OtherText = (props) => <span className="OtherText">{props.text.replace(/\s/g, NBSP)}</span>
OtherText.PropTypes = { text: React.PropTypes.string.isRequired }
OtherText.defaultProps = { text: "" }

export default Result