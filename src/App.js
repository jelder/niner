import React from 'react';
import Alphabet from './alphabet';
import './App.css'

var App = React.createClass({

  render: function() {
    const store = this.context.store.getState();
    return (
      <div>
        <textarea
          value={store.text}
          onChange={this.handleChange}
          autoFocus={true}
          autoCapitalize="sentences"
          placeHolder="Type anything"
          className="MainTextarea"
          spellCheck={true}/>
        <Result text={store.text}/>
      </div>
    );
  },

  handleChange: function(event) {
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
  const result = props.text.split(/\n+|(\. )/).map((text) => <Sentence text={text}/>)
  return (result.length === 0 ? null : <div>{result}</div>)
}

const Sentence = (props) => {
  const sentence = props.text.split(/([a-zA-Z0-9])/).reduce((prev, value, index, array) => {
    if (value === "") {
      return prev
    } else if (Alphabet.hasOwnProperty(value.toLowerCase())) {
      return [...prev, <CodeWord letter={value.toLowerCase()}/>]
    } else {
      return [...prev, <OtherText text={value}/>]
    }
  }, [])
  return (sentence.length === 0 ? null : <div className="Sentence">{sentence}</div>)
}
Sentence.PropTypes = { text: React.PropTypes.string.isRequired }
Sentence.defaultProps = { text: "" }

const CodeWord = (props) => <span className="CodeWord">{Alphabet[props.letter][0]}</span>
CodeWord.PropTypes = {
  letter: React.PropTypes.string.isRequired,
  pronounce: React.PropTypes.boolean,
}
CodeWord.defaultProps = {
  letter: "",
  pronounce: false,
}

const NBSP = "\u00a0"
const OtherText = (props) => <span className="OtherText">{props.text.replace(/\s/g, NBSP)}</span>
OtherText.PropTypes = { text: React.PropTypes.string.isRequired }
OtherText.defaultProps = { text: "" }

export default App;
