import axios from "axios";
let baseApi = "https://vetawan.vercel.app";

const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  },
};

let Get = async (apiName, headers = {}, body) => {
  return await new Promise((resolve, reject) => {
    const axiosConfig = {
      method: "get",
      url: `${baseApi}${apiName}`,
      data: body ?? undefined,
      headers: Object.keys(headers).length > 0 ? headers : undefined,
    };

    axios(axiosConfig)
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
let Post = async (apiName, body, headers = {}) => {
  return await new Promise((resolve, reject) => {
    const axiosConfig = {
      method: "post",
      url: `${baseApi}${apiName}`,
      data: body,
      headers: Object.keys(headers).length > 0 ? headers : undefined,
    };

    axios(axiosConfig)
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export { Get, Post };
