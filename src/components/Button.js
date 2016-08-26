import React, { PropTypes } from 'react'

const Button = ({ active, children, onClick }) => {
  // if (active) {
  //   return <span className="Button">{children}</span>
  // }

  return (
    <button
      className="Button"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      disabled={active}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button