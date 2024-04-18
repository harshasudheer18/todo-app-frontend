import * as api from "../../../../config/api";
import * as http from "../../../../config/http";

export const getProjects = () => {
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    }
    return (http.get(`${api.root}/projects`, headers));
}

export const submitAddTask = (data) => {
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

    return (http.post(`${api.root}/tasks`, body, headers));
}

export const submitEditTask = (data) => {
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

export const deleteTask = (id) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return http.del(`${api.root}/tasks/${id}`, headers);
  };