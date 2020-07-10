import axios from 'axios';

axios.defaults.baseURL = 'https://5efcb20dcf235d0016ad7bc4.mockapi.io/api/v1';

async function getCollections() {
  try {
    const response = await axios.get('/inventory');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { getCollections };

