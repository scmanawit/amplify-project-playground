const axios = require('axios');

exports.handler = async (event) => {
  const { httpMethod, pathParameters, body } = event;

  const url = 'https://jsonplaceholder.typicode.com/posts';

  switch (httpMethod) {
    case 'POST':
      return axios.post(url, JSON.parse(body)).then((response) => ({
        statusCode: response.status,
        body: JSON.stringify(response.data),
      }));
  }
};