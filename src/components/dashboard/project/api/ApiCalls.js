import * as api from "../../../../config/api";
import * as http from "../../../../config/http";

export const addProject = (data) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
        Authorization: `Bearer ${token}`
    }

    const body = {
        "title": data.name,
        "description": data.description,
        "user": {
            "firstName": user.firstname,
            "lastName": user.lastname,
            "email": user.email
        }
    }

    return (http.post(`${api.root}/projects`, body, headers));
}

export const editProject = (id, data) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
        Authorization: `Bearer ${token}`
    }

    const body = {
        "title": data.name,
        "description": data.description,
        "user": {
            "firstName": user.firstname,
            "lastName": user.lastname,
            "email": user.email
        }
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