import * as api from "../../../../config/api";
import * as http from "../../../../config/http";

export const submitTaskDone = (data) => {
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    }
    const body = {
        "title": data.title,
        "description": data.description,
        "priority": data.priority,
        "deadline": data.deadline,
        "status": data.status,
        "projectId": data.projectDTO.id
    }

    return (http.put(`${api.root}/tasks/${data.id}`, body, headers));
}