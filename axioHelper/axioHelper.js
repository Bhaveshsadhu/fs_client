import axios from "axios";
const APIEP = import.meta.env.VITE_ROOT_API + "/api/v1/";

const apiProcessor = async ({ method, url, data, authorization = "" }) => {
  try {
    
    const headers = {};

    if (authorization) {
      headers.authorization = authorization;
    }
   
    const res = await axios({
      method,
      url,
      data,
      headers,
    });
    // console.log(res);
    return res.data;
  } catch (error) {
    // console.log(error);
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
    
    const res = await apiProcessor(obj);
   
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
      status: "error",
      message: error.message,
    };
  }
};
//Get all Transcation for specific user
export const getAllTranscation = async (authorization) => {
  try {
    const obj = {
      method: "get",
      url: APIEP + "transcations",
      authorization,
    };

    const result = await apiProcessor(obj);
    return result;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const deleteTranscations = async (authorization, idsToDelete) => {
  try {
    const obj = {
      method: "delete",
      url: APIEP + "transcations",
      authorization,
      data: idsToDelete,
    };
  
    const result = await apiProcessor(obj);
    return result;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// Update transcation

export const updateTranscation = async (transObj, authorization) => {
  try {
    const obj = {
      method: "patch",
      url: APIEP + "transcations",
      data: transObj,
      authorization,
    };
   
    const result = await apiProcessor(obj);
    return result;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// get map data

export const getMapData = async (authorization) => {
  try {
     // const { data } = await axios.get(`/api/transactions/summary/${userId}`);
    const obj = {
      method: "get",
      url: APIEP + "transcations/summary",
      data: "",
      authorization,
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