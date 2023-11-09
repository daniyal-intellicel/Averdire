import { FETCH_ABUSE_REPORT_LIST_SUCCESS } from "../../constants/ActionTypes";

const initialUsers = {
  abuseReportList: null,
};

export default (state = initialUsers, action) => {
  switch (action.type) {
    case FETCH_ABUSE_REPORT_LIST_SUCCESS: {
      return {
        ...state,
        abuseReportList: action.payload,
      };
    }

    default:
      return state;
  }
};
