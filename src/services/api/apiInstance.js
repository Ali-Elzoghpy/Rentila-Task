import axios from "axios";
import {baseURL} from "./apiConfig"
export const privateApiInstance = axios.create({
    baseURL,

});
