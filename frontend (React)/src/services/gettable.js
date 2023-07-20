import { myAxios } from "./helper";

export const getData = () => {
    return myAxios.get("/api/v1/student").then((response) => response.data);
  };