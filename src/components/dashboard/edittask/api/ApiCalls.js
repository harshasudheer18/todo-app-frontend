import * as api from "../../../../config/api";
import * as http from "../../../../config/http";

export const editTask = (data) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
        Authorization: `Bearer ${token}`
    }
    const body = {
        "title": data.title,
        "description": data.description,
        "priority": data.priority,
        "deadline": data.deadline,
        "project": {
            "id": data.project.id,
            "title": data.project.title,
            "description": data.project.description
        },
        "user": {
            "firstName": user.firstname,
            "lastName": user.lastname,
            "email": user.email
        }
    }

    return (http.put(`${api.root}/tasks/${data.id}`, body, headers));
}