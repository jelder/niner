import React from 'react';
import Textarea from 'react-textarea-autosize'
import './App.css'
import Result from './Result.js'
import {changeText} from '../actions'
import ModeButton from '../containers/ModeButton'
import { connect } from 'react-redux'

var UnconnectedApp = React.createClass({

  render: function() {
    const { text, mode, onTextChange } = this.props
    return (
      <div className="App">
        <Textarea
          value={text}
          className="MainTextarea"
          onChange={(event) => onTextChange(event.target.value)}
          autoFocus={true}
          autoCapitalize="sentences"
          placeholder="Type anything. The more phonetically ambiguous, the better!"
          spellCheck={true}/>

        <ModeButton mode="codeword">
          Code Word
        </ModeButton>
        <ModeButton mode="faa">
          Phonetic
        </ModeButton>
        <ModeButton mode="ipa">
          IPA
        </ModeButton>
        <Result key="result" text={text} mode={mode}/>

      </div>
    );
  },

})

const mapStateToProps = (state, ownProps) => {
  return {
    mode: state.mode,
    text: state.text,
  }
}

const App = connect(
  mapStateToProps,
  { onTextChange: changeText }
  // mapDispatchToProps
)(UnconnectedApp)

export default App;
