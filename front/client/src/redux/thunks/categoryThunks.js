import axios from 'axios'
import {getCategoryToState} from "../actions/categoryActions";


export const getAllCategories = () => async (dispatch) => {
	const res = await axios.get('http://62.113.105.113:4042/sports', { withCredentials: true }); //https://sportik.herokuapp.com/
	dispatch(getCategoryToState(res.data));
}
