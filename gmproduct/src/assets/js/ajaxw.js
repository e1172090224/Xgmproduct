import axios from 'axios';

const ajaxw = axios.create({
    baseURL: '/apiw/',
    timeout: 12000,
    withCredentials: true,
})
export default ajaxw;