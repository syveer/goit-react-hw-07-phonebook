import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65e61a7dd7f0758a76e81d6d.mockapi.io/contacts/:endpoint', // Your API base URL
  timeout: 5000, // Timeout after 5 seconds
});

export default instance;
