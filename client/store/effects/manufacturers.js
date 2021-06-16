import axios from "axios";

import { getMunufacturersInfo } from "../actions/action";

// THUNK CREATORS

export const fetchManufacturerInfo = () => {
  return async (dispatch) => {
    try {
      const { data: manufacturerInfo } = await axios.get("/api/manufacturer")
      dispatch(getMunufacturersInfo(manufacturerInfo))
    } catch (error) {
      console.log(error)
    }
  }
}
