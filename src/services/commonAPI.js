import axios from "axios";

const commonAPI = async (Httpmethod, url, reqBody) => {
  const reqConfig = {
    method: Httpmethod,
    url,
  };

  if (Httpmethod !== "GET") {
    reqConfig.data = reqBody;
  }

  try {
    const res = await axios(reqConfig);
    return res;
  } catch (err) {
    // Handling error properly
    if (err.response) {
      // The request was made and the server responded with a status code outside the range of 2xx
      return err.response;
    } else if (err.request) {
      // The request was made but no response was received
      return { message: "No response from server", details: err.request };
    } else {
      // Something happened in setting up the request that triggered an Error
      return { message: "Error in request setup", details: err.message };
    }
  }
};

export default commonAPI;
