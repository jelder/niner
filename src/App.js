import React from 'react';
import Alphabet from './alphabet';
import Textarea from 'react-textarea-autosize'
import './App.css'

var App = React.createClass({

  render: function() {
    const store = this.context.store.getState();
    return (
      <div>
        <Textarea
          value={store.text}
          className="MainTextarea"
          onChange={this.handleTextChange}
          autoFocus={true}
          autoCapitalize="sentences"
          placeholder="Type anything"
          spellCheck={true}/>
        <Result key="result" text={store.text}/>
      </div>
    );
  },

  handleTextChange: function(event) {
    this.setState(this.context.store.dispatch({
      type: 'CHANGE_TEXT',
      text: event.target.value
    }))
  },

})

App.contextTypes = {
  store: React.PropTypes.object
}

const Result = (props) => {
  const result = props.text.split(/\n+|(\. )/).map((text, index) => <Sentence text={text} key={"sentence_" + index}/>)
  return (result.length === 0 ? null : <div>{result}</div>)
}

const Sentence = (props) => {
  const sentence = props.text.split(/([a-zA-Z0-9])/).reduce((prev, value, index, array) => {
    if (value === "") {
      return prev
    } else if (index > 0 && array[index-1].match(/\d/) && value === ".") {
      return [...prev, <CodeWord {...Alphabet.decimal} key={"codeword_" + index}/>]
    } else if (Alphabet.hasOwnProperty(value)) {
      return [...prev, <CodeWord {...Alphabet[value]} key={"codeword_" + index}/>]
    } else if (Alphabet.hasOwnProperty(value.toLowerCase())) {
      let props = {
        ...Alphabet[value.toLowerCase()],
        codeword: Alphabet[value.toLowerCase()].codeword.toUpperCase()
      }
      return [...prev, <CodeWord {...props} key={"codeword_" + index}/>]
    } else {
      return [...prev, <OtherText text={value} key={"text_" + index}/>]
    }
  }, [])
  return (sentence.length === 0 ? null : <div className="Sentence">{sentence}</div>)
}
Sentence.PropTypes = { text: React.PropTypes.string.isRequired }
Sentence.defaultProps = { text: "" }

const CodeWord = (props) => <span className="CodeWord">{props.codeword}</span>
CodeWord.propTypes = {
  codeword: React.PropTypes.string.isRequired,
  faa: React.PropTypes.string,
  ipa: React.PropTypes.string,
}

const NBSP = "\u00a0"
const OtherText = (props) => <span className="OtherText">{props.text.replace(/\s/g, NBSP)}</span>
OtherText.PropTypes = { text: React.PropTypes.string.isRequired }
OtherText.defaultProps = { text: "" }

export default App;
