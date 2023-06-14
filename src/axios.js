import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-cd4d8.cloudfunctions.net/api",
});

export default instance;
