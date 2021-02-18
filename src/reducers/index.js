import { FETCH_CHARS_FAIL, FETCH_CHARS_SUCCESS, FETCH_CHARS_START } from '../actions';

const initState = {
    characters: [],
    isFetching: false,
    error: ''
}

export default function reducer( state=initState, action){
    switch( action.type ){
        case FETCH_CHARS_START:
            return{
                ...state,
                error: '',
                isFetching: true
            }
            case FETCH_CHARS_SUCCESS:
                return{
                    ...state,
                    characters: action.payload,
                    error: '',
                    isFetching: false
                }
            case FETCH_CHARS_FAIL:
                return{
                    ...state,
                    isFetching: false,
                    error: action.payload 
                }
            default:
                return state

    }
}