import _ from 'lodash';
import { GOT_USERS, GOT_ONLINE_USERS, GOT_REPORTED_USERS, USER_UPDATED, GOT_PERMANENT_USERS } from "../../constants/ActionTypes";

const initialUsers = {
  users: { users_list: [] },
};

export default (state = initialUsers, action) => {
  switch (action.type) {
    case GOT_USERS: {
      return {
        ...state,
        users: action.payload
      };
    }
    default:
      return state;
  }
};
