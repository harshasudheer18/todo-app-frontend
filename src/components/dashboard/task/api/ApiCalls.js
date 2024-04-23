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
    const headers = {
        Authorization: `Bearer ${token}`
    }
    const body = {
        "title": data.title,
        "description": data.description,
        "priority": data.priority,
        "deadline": data.deadline,
        "projectId": data.project.id
    }

    return (http.post(`${api.root}/tasks`, body, headers));
}

export const submitEditTask = (data) => {
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    }
    const body = {
        "title": data.title,
        "description": data.description,
        "priority": data.priority,
        "deadline": data.deadline,
        "projectId": data.project.id
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