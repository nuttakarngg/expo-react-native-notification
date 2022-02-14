import axios from "axios";
import { apiUrl } from "../environments";

export function PostToken(token) {
  console.log(token,apiUrl);
  return axios.post(`${apiUrl}/token`, { token });
}
