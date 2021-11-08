import axios from "axios"
import { GET_DATA_POST, API_KEY, LOADING_DATA } from "./const"

export function getDataPost(q = 'batman'){
    return async (dispatch, getState) => {
        dispatch({type: LOADING_DATA})
        await axios.get(`http://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`)
            .then(async (response) => {
                if (response.data.Response === 'False') {
                    dispatch({type: GET_DATA_POST, payload: response.data.Error, loading: false, error: true})
                }
                else {
                    dispatch({type: GET_DATA_POST, payload: response.data.Search, loading: false, error: false})
                }
            })
            .catch((err) => console.log(err))
    }
}