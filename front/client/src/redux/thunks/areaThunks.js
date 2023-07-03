import axios from 'axios'
import { setAreasToState } from '../actions/areaActions';



export const getAllAreas = () => async (dispatch) => {
  const res = await axios.get('http://62.113.105.113:4042/places', { withCredentials: true }); //https://sportik.herokuapp.com/
  dispatch(setAreasToState(res.data));
}
