import { connect } from 'react-redux'
import { setMode } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.mode === ownProps.mode
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setMode(ownProps.mode))
    }
  }
}

const ModeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ModeButton
