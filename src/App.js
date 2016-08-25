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
        <NatoSentence text={store.text}/>
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

const NatoSentence = (props) => {
  const sentence = props.text.split(/([a-zA-Z0-9.])/).reduce((prev, value, index, array) => {
    if (value === "") {
      return prev
    } else if (Alphabet.hasOwnProperty(value.toLowerCase())) {
      word = if (array[index-1].match(/\d/)) {
        
      } else {
        <NatoWord letter={value.toLowerCase()}/>
      }

      return [...prev, word]
    } else {
      return [...prev, <OtherText text={value}/>]
    }
  }, [])
  return (sentence.length === 0 ? null : <div>{sentence}</div>)
}
NatoSentence.PropTypes = { text: React.PropTypes.string.isRequired }
NatoSentence.defaultProps = { text: "" }

const NatoWord = (props) => <span className="NatoWord">{Alphabet[props.letter][0]}</span>
NatoWord.PropTypes = {
  letter: React.PropTypes.string.isRequired,
  pronounce: React.PropTypes.boolean,
}
NatoWord.defaultProps = {
  letter: "",
  pronounce: false,
}

const NBSP = "\u00a0"
const OtherText = (props) => <span className="OtherText">{props.text.replace(/\s/g, NBSP)}</span>
OtherText.PropTypes = { text: React.PropTypes.string.isRequired }
OtherText.defaultProps = { text: "" }

export default App;
