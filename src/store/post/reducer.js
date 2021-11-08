import { GET_DATA_POST, LOADING_DATA } from "./const";

const initialValue = {
    posts: [],
    loading: false,
    error: false
};

export default function reducer(state = initialValue, actions: {type: string, payload: [], loading: boolean, error: boolean } ){
    switch(actions.type){
        case GET_DATA_POST:
            return{
                ...state,
                posts: actions.payload,
                loading: actions.loading,
                error: actions.error
            }
        case LOADING_DATA:
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }
}