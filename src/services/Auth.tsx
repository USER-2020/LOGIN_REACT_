import axios from "axios";
import { urlBase } from "../defaultValues";

export const loginService = (body: { email: string; password: string }) =>
    axios.post(`${urlBase}/login`,body);