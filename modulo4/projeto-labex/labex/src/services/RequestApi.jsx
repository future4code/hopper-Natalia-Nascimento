import axios from "axios";
import { baseUrl } from "./Url";


export const getTrips = async () => {
  try{
    const { data } = await axios.get(`${baseUrl}/trips`)
    return data.trips;
  }catch (error){
    console.log(error.response);
  }
}