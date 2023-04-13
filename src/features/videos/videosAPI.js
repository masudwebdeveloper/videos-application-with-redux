import axios from "../../utils/axios";

export const getVidos = async () => {
  const response = await axios.get("/videos");
  return response.data;
};
