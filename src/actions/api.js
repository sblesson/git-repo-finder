import axios from 'axios';

export async function getAPI(url) {
  let args = {
    url: url,
    method: 'GET',
  };
  const response = await axios(args);
  return response;
}
