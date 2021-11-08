import { GET_DATA_DETAIL, LOADING_DATA } from "./const";

const initialValue = {
    detail: null,
    loadingDetail: false,
    errorDetail: false
};

export default function reducer(state = initialValue, actions: {type: string, payload: [], loading: boolean, error: boolean } ){
    switch(actions.type){
        case GET_DATA_DETAIL:
            return{
                ...state,
                detail: actions.payload,
                loadingDetail: actions.loading,
                error: actions.error
            }
        case LOADING_DATA:
            return{
                ...state,
                loadingDetail: true
            }
        default:
            return state
    }
}