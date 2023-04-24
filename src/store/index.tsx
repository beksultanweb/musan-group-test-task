import { legacy_createStore as createStore } from 'redux'
import { IRequestsReducer, IRequestsStoreAction } from './types'
import { IRequest } from '../types/types'

const initialState: IRequestsReducer = {
    requests: []
}

const reducer = (state = initialState, action: IRequestsStoreAction) => {
    switch(action.type) {
        case 'request/add':
            const newRequest: IRequest = {
                key: state.requests.length + 1,
                name: action.payload.name,
                tel: action.payload.tel,
                email: action.payload.email,
                city: action.payload.city,
                date: action.payload.date
            }
            return {...state, requests: state.requests.concat(newRequest)}
        default: return state
    }
}

export const store = createStore(reducer)