import axios from "axios";

const instance = axios.create({
    baseUrl: 'http://localhost:8081'
});

export default instance;