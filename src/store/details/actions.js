import axios from "axios"
import { GET_DATA_DETAIL, API_KEY, LOADING_DATA } from "./const"

export function getDetail(imdbID){
    return async (dispatch) => {
        dispatch({type: LOADING_DATA})
        await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
            .then(async (response) => {
                dispatch({type: GET_DATA_DETAIL, payload: response.data, loading: false, error: false})
            })
            .catch((err) => console.log(err))
    }
}