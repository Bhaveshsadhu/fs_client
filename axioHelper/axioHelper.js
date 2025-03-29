import axios from "axios";
const APIEP = "http://localhost:8000/api/v1/";

const apiProcessor = async ({ method, url, data }) => {
  try {
    const res = await axios({
      method,
      url,
      data,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
// add user
export const addUser = (userObj) => {
  try {
    const obj = {
      method: "post",
      url: APIEP + "users",
      data: userObj,
    };
    const res = apiProcessor(obj);
    console.log(res);
    return res;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
