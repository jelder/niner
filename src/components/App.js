import React from 'react';
import Textarea from 'react-textarea-autosize'
import './App.css'
import Result from './Result.js'
import {changeText} from '../actions'
import ModeLink from '../containers/ModeLink'

var App = React.createClass({

  render: function() {
    const store = this.context.store.getState();
    return (
      <div>
        <Textarea
          value={store.text}
          className="MainTextarea"
          onChange={this.onChange}
          autoFocus={true}
          autoCapitalize="sentences"
          placeholder="Type anything. The more phonetically ambiguous, the better!"
          spellCheck={true}/>

        <ModeLink mode="codeword">
          Code Word
        </ModeLink>
        <ModeLink mode="faa">
          FAA
        </ModeLink>
        <ModeLink mode="ipa">
          IPA
        </ModeLink>
        <Result key="result" text={store.text} mode={store.mode}/>

      </div>
    );
  },

  onChange: function(event) {
    this.setState(this.context.store.dispatch(changeText(event.target.value)))
  },

})

App.contextTypes = {
  store: React.PropTypes.object
}

export default App;
