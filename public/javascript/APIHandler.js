const axios = require('axios');
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get('http://localhost:8000/characters')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getOneRegister (id) {
    axios.get('http://localhost:8000/characters/id')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  createOneRegister () {
   axios.post('http://localhost:8000/characters', {
   name: 'Han Solo',
   occupation: 'Smuggler',
   weapon: 'Blaster Pistol',
   cartoon: true
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
});

  }

  updateOneRegister (id, data) {
    return axios.put ('http://localhost:8000/characters/id', data)
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
  }

  deleteOneRegister (id) {
    return axios.delete ('http://localhost:8000/characters/id')
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });

  }
}
const apiHandler = new APIHandler('http://localhost:8000');
apiHandler.deleteOneRegister();
