import axios, {  } from "axios";
import { AppUser } from "../models/AppUser";
import { LoginDTO } from "../models/LoginDTO";
import { RegisterUserDTO } from "../models/RegisterUserDTO";



axios.defaults.baseURL=  process.env.REACT_APP_API_URL;



const requests = {
    get: <T,>(url:string)=> axios.get<T>(url),
    post:<T,> (url:string, body:{})=> axios.post<T>(url, body),
    put: <T,>(url:string, body:{})=> axios.put<T>(url, body),
    del: <T,> (url:string)=> axios.delete<T>(url),
}
const Account = {
    login:(user: LoginDTO)=> requests.post<AppUser>('/account/login', user),
    register: (user: RegisterUserDTO)=> requests.post<RegisterUserDTO>('/account/register', user),
  
}

const agent={
    Account
}

export default agent;