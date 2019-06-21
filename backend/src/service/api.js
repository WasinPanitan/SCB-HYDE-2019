import axios from 'axios';
import { isNil } from 'lodash';

const apiKey = 'l710281fc525264da39562f271d3a0699a';
const apiSecret = '1316b88e6ad548abaaba74cf6d8ae800';


const URL = {
  OAUTH_AUTH: '',
  OAUTH_TOKEN: 'https://api.partners.scb/partners/sandbox/v1/oauth/token',
  OAUTH_REFRESH_TOKEN: '',
  CS_PROFILE: 'https://api.partners.scb/partners/sandbox/v1/customers/profile',
  LOAN_CAL: 'https://api.partners.scb/partners/sandbox/v1/loanorigination/simulator/calculate',
};

const getHeaders = (header = {}) => (
  {
    'content-type': 'application/json',
    'accept-language': 'EN',
    resourceOwnerId: '26f466d7-5149-4f59-bf99-cfe7d29c90bd',
    requestUId: '99100361-23d2-433d-8c21-4b6469918713',
    ...(isNil(header.authorization) ? {} : { authorization: header.authorization }),
  }
);

const fetchToken = async () => {
  try {
    const response = await axios(
      URL.OAUTH_TOKEN,
      {
        method: 'POST',
        headers: getHeaders(),
        data: {
          applicationKey: apiKey,
          applicationSecret: apiSecret,
          authCode: '',
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
        headers: getHeaders(header),
      }
    );
    return response.data;
  } catch (err) {
    return null;
  }
};

const fetchCalculateLoan = async (header, data) => {
  try {
    const { totalRequestAmount, installmentAmount } = data;
    const response = await axios(
      URL.LOAN_CAL,
      {
        method: 'POST',
        headers: getHeaders(header),
        body: {
          loan: {
            productIntent: 'GENERAL',
            totalRequestAmount,
            paymentFrequency: 'Monthly',
            installmentAmount,
            gracePeriod: 0,
            dueDay: 25,
          }
        }
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default {
  fetchCalculateLoan,
  fetchToken,
  fetchProfile,
};
