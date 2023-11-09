import axios from "axios";

import ReduxStore from "../redux/store";

class APICaller {
  execute = (api, params) => {
    return new Promise((resolve, reject) => {
      let headers = {};
      const user = ReduxStore.getState().auth.authUser;

      if (user) {
        const { accessToken } = user;

        headers = {
          "x-access-token": accessToken,
        };
      }

      let formDataOptions = {
        initialFormData: new FormData(),
        showLeafArrayIndexes: true,
        includeNullValues: false,
        mapping: function(value) {
          if (value instanceof File) {
            return value;
          }
          return value;
        },
      };

      const formData =
        params &&
        api.method.dataFormat === "formData" &&
        window.jsonToFormData(params.data, formDataOptions);

      console.log(`params:`, params);
      console.log(`api:`, api);
      console.log(`user:`, user);
      // for (var key of formData.entries()) {
      //   console.log(key[0] + ', ' + key[1])
      // }

      return axios({
        method: api.method.type,
        url: `${
          api.noPrefixRequired ? "" : process.env.REACT_APP_API_URL_PREFIX
        }${api.path}`,
        data: params
          ? api.method.dataFormat === "formData"
            ? formData
            : params.data
          : null,
        headers: { ...headers, ...(api.method.headers || null) },
      }).then(
        (response) => {
          resolve(response.data);
        },
        (error) => {
          let { message } = error;

          if (
            error &&
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            message = error.response.data.message;
          } else if (!message) {
            message = "Request Failed.";
          }

          console.error(error);
          console.error("error message:", message);
          reject({ message });
        }
      );
    });
  };
}

export default new APICaller();
