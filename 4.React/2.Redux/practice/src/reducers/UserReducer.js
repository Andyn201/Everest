import {FETCH_USERS, CHANGE_BACKGROUND} from '../actions/types';

const initialState = {
    items: [],
    background: true
}

export default function(state = initialState, action){
    console.log(action.payload)
    switch(action.type){
        case FETCH_USERS:
            return {
                ...state,
                items: action.payload
            }

        case CHANGE_BACKGROUND:
            return {
                ...state,
                background: action.payload
            }
        default:
            return state
    }
}