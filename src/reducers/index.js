import { combineReducers } from 'redux'
import {text} from './text'
import {mode} from './mode'

const reducer = combineReducers({
  text,
  mode,
})

export default reducer