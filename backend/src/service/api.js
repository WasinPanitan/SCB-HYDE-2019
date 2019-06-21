import axios from 'axios';

const apiKey = 'l710281fc525264da39562f271d3a0699a';
const apiSecret = '1316b88e6ad548abaaba74cf6d8ae800';
const resourceOwnerId = '26f466d7-5149-4f59-bf99-cfe7d29c90bd';

const URL = {
  OAUTH_AUTH: '',
  OAUTH_TOKEN: 'https://api.partners.scb/partners/sandbox/v1/oauth/token',
  OAUTH_REFRESH_TOKEN: '',
  CS_PROFILE: 'https://api.partners.scb/partners/sandbox/v1/customers/profile',
};

const DEFAULT_HEADER = {
  'content-type': 'application/json',
  'accept-language': 'EN',
};

const fetchToken = async () => {
  try {
    const response = await axios(
      URL.OAUTH_TOKEN,
      {
        method: 'POST',
        data: {
          applicationKey: apiKey,
          applicationSecret: apiSecret,
          authCode: '',
        },
        headers: {
          ...DEFAULT_HEADER,
          resourceOwnerId,
          requestUId: '85230887-e643-4fa4-84b2-4e56709c4ac4',
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const fetchProfile = async (header) => {
  try {
    const response = await axios(
      URL.CS_PROFILE,
      {
        method: 'GET',
        headers: {
          ...DEFAULT_HEADER,
          authorization: header.authorization, // Bearer token
          requestUId: '99100361-23d2-433d-8c21-4b6469918713',
          resourceOwnerId,
        },
      }
    );
    return response.data;
  } catch (err) {
    return null;
  }
};

export default {
  fetchToken,
  fetchProfile,
};
