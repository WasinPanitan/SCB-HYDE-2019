const apiKey = 'l710281fc525264da39562f271d3a0699a';
const apiSecret = '1316b88e6ad548abaaba74cf6d8ae800';

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

const resourceOwnerId = '26f466d7-5149-4f59-bf99-cfe7d29c90bd';

const fetchToken = async (header, data) => {
  const body = {
    applicationKey: apiKey,
    applicationSecret : apiSecret,
    authCode: data.authCode,
  }
  const response = await fetch(URL.OAUTH_TOKEN, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        ...DEFAULT_HEADER,
        resourceOwnerId,
        requestUId: '85230887-e643-4fa4-84b2-4e56709c4ac4',
        ...header,
      },
    }
  )
  return response.json();
}

const fetchProfile = async (header) => {
  const {
    token = '5ce07952-4f26-41d8-aab6-a8b4de05f497',
    requestUId = '99100361-23d2-433d-8c21-4b6469918713',
    resourceOwnerId = '26f466d7-5149-4f59-bf99-cfe7d29c90bd',
  } = header;
  const response = await fetch(URL.OAUTH_TOKEN, {
      method: 'GET',
      headers:{
        authorization: `Bearer ${token}`,
        resourceOwnerId,
        requestUId,
      },
    }
  );
  return response.json();
}

export default {
  fetchToken,
  fetchProfile,
};
