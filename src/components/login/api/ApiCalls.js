import * as api from "../../../config/api";
import * as http from "../../../config/http";

export const submitLogin = (data) => {
    const body = {
        "email": data.email,
        "password": data.password
    }

    return (http.post(`${api.root}/auth/login`, body));
}