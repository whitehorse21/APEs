import axios from 'axios';
import setAuthToken from '../../redux/utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
    SIGNED_WALLET,
    SIGNED_OUT,
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING,
    LANGUAGE
} from './types';

// Register User 
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login')) // re-direct to login on successful register 
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login - get user token 
export const loginUser = userData => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            // save to localStorage
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            // set token to Auth header 
            setAuthToken(token);
            // Decode token to get user data 
            const decoded = jwt_decode(token);
            // Set current user 
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Wallet connection
export const signedWallet = address => {
    return {
        type: SIGNED_WALLET,
        payload: address
    };
}

export const signedOut = () => {
    return {
        type: SIGNED_OUT
    };
}

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log user out 
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests 
    setAuthToken(false);
    // set current user to empty object {}
    // which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};

export const changeLanguage = (value) => {
    return {
        type: LANGUAGE,
        payload: value
    }
}