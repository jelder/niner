import React from 'react';
import './App.css'

var ModeSelector = React.createClass({

  modes: {
    codeword: "Code Word",
    faa: "FAA",
    ipa: "IPA",
  },

  render: function() {
    const {mode} = this.context.store.getState()
    const buttons = this.modes.keys.map(function(choice) {
      let className = mode === choice ? "ModeButton Current" : "ModeButton"
      return <button type="button" name={choice} label={this.modes[choice]} className={className} onChange={this.onChange}/>
    })

    return <div className="ModeSelector">{buttons}</div>
  },

  onChange: function(event) {
    console.log(event.target.value)
    this.setState(this.context.store.dispatch({
      type: 'SET_MODE',
      mode: event.target.value
    }))
  },

})

export default ModeSelector

