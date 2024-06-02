import axios from 'axios';

const requestHttp = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default requestHttp;
