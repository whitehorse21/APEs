import {
    LANGUAGE,
    SET_CURRENT_USER,
    USER_LOADING,
    SIGNED_WALLET,
    SIGNED_OUT
} from '../actions/types.js';

const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    language: 'EN',
    walletAddress: "0x0"
};

// eslint-disable-next-line
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            console.log('reducers : ', action)
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        case SIGNED_WALLET: {
            return {
                ...state,
                walletAddress: action.payload
            }
        }
        case SIGNED_OUT:
            return {
                ...state,
                walletAddress: "0x0"
            }
        default:
            return state;
    }
}