import { FETCH_POST_LIST_SUCCESS } from "../../constants/ActionTypes";

const initialUsers = {
  postList: null,
};

export default (state = initialUsers, action) => {
  switch (action.type) {
    case FETCH_POST_LIST_SUCCESS: {
      return {
        ...state,
        postList: action.payload,
      };
    }

    default:
      return state;
  }
};
