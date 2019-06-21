import api from './api';

const userProfile = (header) => api.fetchProfile(header);

export default {
  userProfile,
};
