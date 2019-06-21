import api from './api';

const userProfile = () => api.fetchProfile();

export default {
  userProfile,
};
