import Notiflix from 'notiflix';
import axios from 'axios';

import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_0w7ZrKBD6fKc50M4ptOmi3TdDtXGyczZRpLqygeOLtmb0vzvwDSj0pjMabDdD6yD';
const url = 'https://api.thecatapi.com/v1';
const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('API Error');
    });
};
const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('API Error');
    });
};

export { fetchBreeds, fetchCatByBreed };