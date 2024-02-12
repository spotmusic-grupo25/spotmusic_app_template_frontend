import { clientAxios } from "../../../infra/http/clientAxios";
import { URL_API } from "../../../main/router/Path/url";

export const fetchLogin = async (dispatch: any) => {
    dispatch({
      type: "START"
    });
    try {
      const results = await clientAxios.get(`${URL_API}/school/list/`)
      dispatch({
        type: "FETCH_HOME_SUCESS",
        payload: results.data
      });
    } catch(error: any) {
      if (error.response.status === 401){
        dispatch({
          type: "STOP"
        });
        window.location.href = "/login";
      }
  
      throw error
    }
  }