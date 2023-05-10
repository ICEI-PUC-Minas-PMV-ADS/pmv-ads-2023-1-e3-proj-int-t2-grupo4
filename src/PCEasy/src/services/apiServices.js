import API from "./webapi.services";
import { BASE_URL } from "./urls";

export const getTimes = async (userId) => {
  try {
    return await API.get(
      `https://incongruous-well-fight.glitch.me/src/PCEasy/backend/db.json/times${userId}`
    ).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const register = async (param) => {
  try {
    return await API.post(
      `https://incongruous-well-fight.glitch.me/src/PCEasy/backend/db.json/times`,
      param
    ).then(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
