import { FETCH_POST_LIST_SUCCESS } from "../../constants/ActionTypes";
import APICaller from "../../utils/APICaller";
import * as APIs from "../../constants/APIs";

export const postListFetch = () => {
  return (dispatch) => {
    APICaller.execute(APIs.GET_POST_LIST).then((response) => {
      dispatch({
        type: FETCH_POST_LIST_SUCCESS,
        payload: response.data,
      });
    });
  };
};

export const postCommentsFetch = (postId) => {
  return (dispatch) => {
    return APICaller.execute(APIs.GET_POST_COMMENTS_LIST(postId))
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };
};
