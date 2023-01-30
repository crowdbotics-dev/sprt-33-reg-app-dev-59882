import axios from "axios"
import { SPRT33_USERNAME, SPRT33_PASSWORD } from "react-native-dotenv"
const sprt = axios.create({
  baseURL:
    "https://drive.google.com/file/d/1X9wK5PISe9crpkPLZxb7ZpGYlb2hqeNh/view",
  auth: { username: SPRT33_USERNAME, password: SPRT33_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
