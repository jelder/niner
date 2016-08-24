import React from 'react';
import Alphabet from './alphabet';
import './App.css'

var App = React.createClass({

  render: function() {
    const store = this.context.store.getState();
    return (
      <div>
        <textarea value={store.text} onChange={this.handleChange} cols="100" rows="5"/>
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
  const sentence = props.text.split(/([a-zA-Z0-9])/).reduce((prev, value, index, array) => {
    if (value === "") {
      return prev
    } else if (Alphabet.hasOwnProperty(value.toLowerCase())) {
      return [...prev, (<NatoWord letter={value.toLowerCase()}/>)]
    } else {
      return [...prev, (<OtherText text={value}/>)]
    }
  }, [])
  return (sentence.length === 0 ? null : <div>{sentence}</div>)
}
NatoSentence.PropTypes = { text: React.PropTypes.string.isRequired }
NatoSentence.defaultProps = { text: "" }

const NatoWord = (props) => <span className="NatoWord">{Alphabet[props.letter][0]}</span>
const OtherText = (props) => <span className="OtherText">{props.text.replace(/\s/g, "\u00a0")}</span>

export default App;
