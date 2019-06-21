import axios from 'axios';

const fetchProfile = async (header) => {
  const response = await axios(
    'http://localhost:6009/api/user/user-profile',
    {
      method: 'GET',
      headers: {
        authorization: 'Bearer 97c4e39c-63ef-4122-882d-6ea6b1f0e49a',
      }
    }
  );
  try {
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return '';
  }
}

export default {
  fetchProfile,
};
