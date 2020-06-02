'use strict';

const axios = require('axios');

module.exports.getAccessToken = async event => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=10l1jtlp01s1lj83me59sso5kh'
    + '&client_secret=aha1gmahdtqqlfbl859r9hpdhr'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://cruebee.github.io/'
    + '&code=4161feb4f76cbeea20a0d433c0f98de7';

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.acces_token,
      refresh_token: info.data.refresh_token,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
