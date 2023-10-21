import axios from "axios";

const Base_Url= 'https://localhost:5013/api/vi'

const axiosInstance= axios.create();

axiosInstance.defaults.baseURL= Base_Url;
axiosInstance.defaults.withCredentials= true;

export default axiosInstance;