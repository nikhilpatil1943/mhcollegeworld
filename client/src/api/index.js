import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    console.log("inside api insterceptors");
    console.log(localStorage.getItem("profile").token)
    req.headers.authorization = JSON.parse(localStorage.getItem("profile")).token;

  }
  return req;
});

export const signin = (formData) => API.post("/user/login", formData);
export const signup = (formData) => API.post("/user/create", formData);


export const getcolleges = (formData) =>
  API.post("/user/collegelist", formData);
  
export const getchance = (formData)=>{
  API.post("user/predict",formData) 
}
export const authenticate = (formData)=> API.post("/authenticate",formData)