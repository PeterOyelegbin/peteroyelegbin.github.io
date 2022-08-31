import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://trusting-lizard-91.hasura.app/api/rest",
});
