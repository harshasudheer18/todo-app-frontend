import * as api from "../../../config/api";
import * as http from "../../../config/http";

export const submitSignUp = (data) => {
    const body = {
        "firstName": data.firstname,
        "lastName": data.lastname,
        "email": data.email,
        "password": data.password
    }

    return (http.post(`${api.root}/auth/signup`, body));
}