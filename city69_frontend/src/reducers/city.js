export const LOAD = '@city/LOAD';
export const LOAD_RESPONSE = '@city/LOAD_RESPONSE';
export const LOAD_SUBGROUPS = '@city/LOAD_SUBGROUPS';
export const LOAD_SUBGROUPS_RESPONSE = '@city/LOAD_SUBGROUPS_RESPONSE';
export const LOAD_DIRECTION = '@city/LOAD_DIRECTION';
export const LOAD_DIRECTION_RESPONSE = '@city/LOAD_DIRECTION_RESPONSE';
export const LOAD_HISTORY = '@city/LOAD_HISTORY';
export const LOAD_HISTORY_RESPONSE = '@city/LOAD_HISTORY_RESPONSE';
export const SEND_FILE = '@/city/SEND_FILE';
export const SEND_FILE_RESPONSE = '@/city/SEND_FILE_RESPONSE';

const initalState = {
    city: {},
    subgroups: [],
    direction: {},
    history: [],
    isLoaded: false,
}

export default function( state = initalState, action) {
    switch(action.type) {
        case LOAD: {
            return {
                ...state,
                isLoaded: false,
            }
        }
        case LOAD_RESPONSE: {
            return {
                ...state,
                city: action.payload,
                isLoaded: true,
            }
        }
        case LOAD_DIRECTION : {
            return {
                ...state,
                direction: {}
            }
        }
        case LOAD_DIRECTION_RESPONSE : {
            return {
                ...state,
                direction: action.payload
            }
        }
        case LOAD_SUBGROUPS: {
            return {
                ...state,
                subgroups: []
            }
        }
        case LOAD_SUBGROUPS_RESPONSE: {
            return {
                ...state,
                subgroups: action.payload,
                isLoaded: true
            }
        }
        case LOAD_HISTORY_RESPONSE: {
            return {
                ...state,
                history: action.payload,
                isLoaded: true
            }
        }
        default:
            return state;
    }
}