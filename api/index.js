import axios from 'axios';

axios.defaults.baseURL = 'https://5efcb20dcf235d0016ad7bc4.mockapi.io/api/v1';

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

async function getCollections() {
  try {
    const response = await axios.get('/inventory');
    //console.log(response);
  } catch (error) {
    //console.error(error);
  }
}

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

async function deleteInventoryRecord(id) {
  try {
    const response = await axios.delete('/inventory/${id}');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export const baseURL ="https://5efcb20dcf235d0016ad7bc4.mockapi.io/api/v1/inventory";

export const EndPoint ="inventory";

export { getCollections,baseURL };

