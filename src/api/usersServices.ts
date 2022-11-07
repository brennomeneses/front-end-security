import api from "./api";

const endpoint = "/users";

export default {
    singUp: (value: IFormSubmission)=> api.post(endpoint, value),
    getUsers: (token: string) => api.get(endpoint, {headers: {Authorization: `Bearer ${token}`}})
}