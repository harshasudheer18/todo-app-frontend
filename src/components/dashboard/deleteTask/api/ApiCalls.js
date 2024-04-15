import * as api from "../../../../config/api";
import * as http from "../../../../config/http";

export const deleteTask = (id) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return http.del(`${api.root}/tasks/${id}`, headers);
};
