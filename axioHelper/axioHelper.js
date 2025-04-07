import axios from "axios";
const APIEP = "http://localhost:8000/api/v1/";

const apiProcessor = async ({ method, url, data, authorization = "" }) => {
  try {
    // console.log(authorization);
    const headers = {};

    if (authorization) {
      headers.authorization = authorization;
    }
    console.log("From axio helper:" + method, url, data, authorization);
    const res = await axios({
      method,
      url,
      data,
      headers,
    });
    // console.log(res.data);
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
      url: APIEP + "users/signup",
      data: userObj,
    };
    const res = apiProcessor(obj);
    return res;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
// user Login
export const userLogin = async (userObj) => {
  try {
    const obj = {
      method: "post",
      url: APIEP + "users/login",
      data: userObj,
    };
    const res = await apiProcessor(obj);
    // console.log(res);
    return res;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getUser = async (authorization) => {
  try {
    const obj = {
      method: "get",
      url: APIEP + "users/",
      data: "",
      authorization,
    };
    // console.log(obj);
    const res = await apiProcessor(obj);
    // console.log(res);
    return res;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// Add new transcation

export const addTranscation = async (transObj, authorization) => {
  try {
    const obj = {
      method: "post",
      url: APIEP + "transcations",
      data: transObj,
      authorization,
    };
    
    const result = await apiProcessor(obj);
    return result;
  } catch (error) {
    return {
      error: "error",
      message: error.message,
    };
  }
};
