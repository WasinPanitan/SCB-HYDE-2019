import api from './api';

const userProfile = async () => {
  return api.fetchUserProfile();
};

export default {
  userProfile,
};
