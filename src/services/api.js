import axios from 'axios';

const api = axios.create({
  baseURL: 'https://processo.profranchising.com.br'
//   baseURL: 'https://ptsv2.com/t/gvmwk-1620487380/',
});

export default api;