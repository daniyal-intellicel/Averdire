const POST = {
  type: "post",
  headers: {
    "content-type": "multipart/form-data",
  },
  dataFormat: "formData",
};
const GET = {
  type: "get",
  dataFormat: "raw",
};
const PUT = {
  type: "put",
  dataFormat: "formData",
};
const DEL = {
  type: "delete",
  dataFormat: "raw",
};

// --------------- APIs --------------- //

export const SIGNIN = {
  method: POST,
  path: "/s/auth/signin",
};

export const GET_USER_LIST = {
  method: GET,
  path: "/s/user/listALL",
};

export const GET_USER = (id) => {
  return {
    method: GET,
    path: `/s/user/view/${id}`,
  };
};

export const GET_POST_LIST = {
  method: GET,
  path: "/s/post/listALL",
};

export const GET_JOB_LIST = {
  method: GET,
  path: "/s/jobs/listAll",
};

export const GET_COMPANY_LIST = {
  method: GET,
  path: "/s/company/listAll",
};

export const GET_SKILL_LIST = {
  method: GET,
  path: "/s/data/listSkills",
};

export const GET_INTEREST_LIST = {
  method: GET,
  path: "/s/data/listInterests",
};

export const GET_ABUSE_REPORT_LIST = {
  method: GET,
  path: "/s/abuseReport/listALL",
};

export const GET_POST_COMMENTS_LIST = (id) => {
  return {
    method: GET,
    path: `/s/post/postComments/${id}`,
  };
};

export const GET_COMPANY = (id) => {
  return {
    method: GET,
    path: `/s/company/view/${id}`,
  };
};

export const GET_JOB = (id) => {
  return {
    method: GET,
    path: `/s/jobs/view/${id}`,
  };
};
