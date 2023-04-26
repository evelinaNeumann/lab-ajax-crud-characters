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

  getOneRegister () {

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

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
const apiHandler = new APIHandler('http://localhost:8000');
apiHandler.getFullList();
