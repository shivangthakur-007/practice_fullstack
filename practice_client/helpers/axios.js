import axios from "axios";

const Base_Url = "http://localhost:5013/api/vi/";

const AxiosInstance= axios.create();

AxiosInstance.defaults.timeout= 1000;
AxiosInstance.defaults.baseURL= Base_Url;
AxiosInstance.defaults.withCredentials= true;

export default AxiosInstance;