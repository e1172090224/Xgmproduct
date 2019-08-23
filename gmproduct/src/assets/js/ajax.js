import axios from 'axios'
const ajax = axios.create({
    baseURL: '/apis/',
    timeout: 120000,
    withCredentials: true,
});
export default ajax;