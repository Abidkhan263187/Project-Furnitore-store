import axios from "axios";
import {  setLatitide, setLongitide } from "../Redux/action";

 export const geolocator_coords=()=>(dispatch)=>{
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatch(setLatitide(latitude));
            dispatch(setLongitide(longitude));
          },
          (error) => {
            // setError(error.message);
          }
        );
      } else {
        console.log('Geolocation is not available in your browser.');
      }
}
const api=process.env.REACT_APP_API
export const getCityName = (latitude, longitude) => async(dispatch)=> {

// console.log(api)
    if(latitude && longitude){
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api}`);
      const { results } = response.data;
      //  console.log(results)
      let GetcityName = results[0].components.state_district
      let city = GetcityName.split(' ')[0];
    //   console.log(city)
      
      localStorage.setItem('city', JSON.stringify(city))
     


    } catch (error) {
      console.log("Error while fetching city name:", error);
    }
  }
  };

