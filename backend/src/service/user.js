import api from './api';

const userProfile = (header) => api.fetchProfile(header);

const token = () => api.fetchToken();

export default {
  userProfile,
  token,
};
