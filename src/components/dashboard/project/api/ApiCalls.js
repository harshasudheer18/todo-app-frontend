import * as api from "../../../../config/api";
import * as http from "../../../../config/http";

export const addProject = (data) => {
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    }

    const body = {
        "title": data.name,
        "description": data.description
    }

    return (http.post(`${api.root}/projects`, body, headers));
}

export const editProject = (id, data) => {
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    }

    const body = {
        "title": data.name,
        "description": data.description
    }

    return (http.put(`${api.root}/projects/${id}`, body, headers));
}

export const deleteProject = (id) => {
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    }
    return (http.del(`${api.root}/projects/${id}`, headers));
}