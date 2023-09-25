import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWFiZWQ5MTdiMDA2MjUzZWIwM2NjNWVlNDhmYmZmMyIsInN1YiI6IjY0ZmYxNWRiZGI0ZWQ2MTAzMmE2Y2IzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZX2VGUqCKYT_rNv6wrBYUXLh-JaSmhh6G6D19Ya_6o`
    }
})

export default api