import axios from "axios";

const request = axios.request({
  baseURL:
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=ca7aa0958a004c38bdd3b8e93eaec9be",
  timeout: 10000,
});
export default request;
