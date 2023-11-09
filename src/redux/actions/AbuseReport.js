import { FETCH_ABUSE_REPORT_LIST_SUCCESS } from "../../constants/ActionTypes";
import APICaller from "../../utils/APICaller";
import * as APIs from "../../constants/APIs";

export const abuseReportListFetch = () => {
  return (dispatch) => {
    APICaller.execute(APIs.GET_ABUSE_REPORT_LIST).then((response) => {
      dispatch({
        type: FETCH_ABUSE_REPORT_LIST_SUCCESS,
        payload: response.data,
      });
    });
  };
};
