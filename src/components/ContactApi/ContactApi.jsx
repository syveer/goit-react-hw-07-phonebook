import axios from 'axios';

const API_BASE_URL = 'https://65eee734ead08fa78a4f337a.mockapi.io/api/v1'; // Your API base URL

export const fetchContactsAPI = async () => {
  try {
    return await axios.get(`${API_BASE_URL}/contacts`);
  } catch (error) {
    throw error;
  }
};

export const addContactAPI = async contactData => {
  try {
    return await axios.post(`${API_BASE_URL}/contacts`, contactData);
  } catch (error) {
    throw error;
  }
};

export const deleteContactAPI = async contactId => {
  try {
    return await axios.delete(`${API_BASE_URL}/contacts/${contactId}`);
  } catch (error) {
    throw error;
  }
};
