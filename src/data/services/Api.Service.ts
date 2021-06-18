import Axios from 'axios';

const url = 'https://ediaristas-workshop.herokuapp.com'

export const ApiService = Axios.create({
    baseURL: url,
    headers: {
        'content-Type': 'application/json'
    }
})