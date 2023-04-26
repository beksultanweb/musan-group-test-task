import { legacy_createStore as createStore } from 'redux'
import { requestReducer } from './RequestStore/reducers'


export const store = createStore(requestReducer)