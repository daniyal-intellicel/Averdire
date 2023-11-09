import { GOT_USERS } from "../../constants/ActionTypes";

import APICaller from "../../utils/APICaller";
import * as APIs from "../../constants/APIs";

export const usersList = (pagination, searchUid = "") => async (dispatch) => {
  APICaller.execute(APIs.GET_USER_LIST).then((response) => {
    dispatch(loadUsersListSuccess({ users_list: response.data }));
  });
};

export const userData = (id) => async (dispatch) => {
  return APICaller.execute(APIs.GET_USER(id))
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return null;
    });
};

const loadUsersListSuccess = (users) => ({
  type: GOT_USERS,
  payload: users,
});
