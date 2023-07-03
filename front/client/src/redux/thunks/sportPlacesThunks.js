import axios from 'axios'
import { setAreasToState } from '../actions/areaActions';



export const getAreaPlaces = () => async (dispatch) => {
  const res = await axios.get('http://62.113.105.113:4042/sportplaces', { withCredentials: true }); //https://sportik.herokuapp.com/
  return res.data
}
