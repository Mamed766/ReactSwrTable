import axios from "axios";

export const postData = async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/data", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
