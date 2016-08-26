import { connect } from 'react-redux'
import { setMode } from '../actions'
import Link from '../components/Link'

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

const ModeLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default ModeLink
