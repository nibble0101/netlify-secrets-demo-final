const axios = require("axios");

exports.handler = async function (event, context) {
  console.log(event);
  const { id } = event.queryStringParameters;
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ todo: response.data.title }),
  };
};
