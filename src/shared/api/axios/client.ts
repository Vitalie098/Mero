import axios from "axios"
import { API_MERO } from "~/env"
console.log("TTTT")
console.log(API_MERO)
export const apiClient = axios.create({
  baseURL: API_MERO ,
  timeout: 15_000,
  headers: {Accept: "application/json"}
})