import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2RlMzJlNjcyZWQ0Y2ZkNWU3NGZmYTc1Yjk3ZmFmOCIsInN1YiI6IjY1MGRjY2YxNGNjYzUwMDExYTgwMTIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G518OE1qyRoVKCseL-D3p_s2L-K1rW-NEqGUnQG3QhM`
  }
})

export default api
