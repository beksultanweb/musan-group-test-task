import { IRequestsReducer, IRequestsStoreAction } from '../RequestStore/types'
import { IRequest } from '../../types/types'

const initialState: IRequestsReducer = {
    requests: []
}

export const requestReducer = (state = initialState, action: IRequestsStoreAction) => {

    switch(action.type) {
        case 'request/add':
            const newRequest: IRequest = {
                id: Math.random(),
                name: action.payload.name,
                tel: action.payload.tel,
                email: action.payload.email,
                city: action.payload.city,
                date: action.payload.date
            }
            return {...state, requests: [...state.requests, newRequest]}
        default: return state
    }
}