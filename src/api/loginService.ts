import api from "./api";

const endpoint = "/login";

export default {
    login: (values: ILoginValues)=> api.post(endpoint, values)
};