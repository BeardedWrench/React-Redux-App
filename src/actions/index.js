import axios from 'axios';

export const FETCH_CHARS_FAIL = 'FETCH_CHARS_FAIL';
export const FETCH_CHARS_SUCCESS = 'FETCH_CHARS_SUCCESS';
export const FETCH_CHARS_START = 'FETCH_CHARS_START';

export const getList = () => dispatch => {
    dispatch( { type: FETCH_CHARS_START } )
    axios.get( `https://rickandmortyapi.com/api/character` )
        .then( res => dispatch( { type: FETCH_CHARS_SUCCESS, payload: res.data.results } ) )
        .catch( err => dispatch( { type: FETCH_CHARS_FAIL, payload: err } ) );
}