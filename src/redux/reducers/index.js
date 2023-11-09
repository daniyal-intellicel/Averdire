import { combineReducers } from "redux";
import Auth from "./Auth";
import Settings from "./Settings";
import User from "./User";
import Post from "./Post";
import Job from "./Job";
import Company from "./Company";
import AbuseReport from "./AbuseReport";
import Data from "./Data";

const reducers = combineReducers({
  auth: Auth,
  user: User,
  post: Post,
  job: Job,
  company: Company,
  abuseReport: AbuseReport,
  data: Data,
  settings: Settings,
});

export default reducers;
