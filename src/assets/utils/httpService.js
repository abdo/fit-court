import axios from 'axios';

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};

export default http;

export const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common.Authorization = token;
  }
};

export const removeAuthToken = () => {
  // Delete auth header
  delete axios.defaults.headers.common.Authorization;
};

export const serverPath = 'http://46.101.170.117/fitcourt';
// export const serverPath = 'http://192.168.100.8:4950';

export const mealAPI = `${serverPath}/api/meal`;
