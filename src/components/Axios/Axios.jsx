import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65eee734ead08fa78a4f337a.mockapi.io/api/v1', // Your API base URL
  timeout: 5000, // Timeout after 5 seconds
});

export default instance;
