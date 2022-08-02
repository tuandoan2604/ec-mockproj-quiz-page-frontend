import axios from "axios";

const request = axios.create({
    baseURL: 'https://fwa-ec-quiz-mock1.herokuapp.com/v1/',
})
export default request