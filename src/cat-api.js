import Notiflix from 'notiflix';
import axios from 'axios';

const api_key =
  'live_0w7ZrKBD6fKc50M4ptOmi3TdDtXGyczZRpLqygeOLtmb0vzvwDSj0pjMabDdD6yD';
axios.defaults.headers.common['x-api-key'] =
  'live_0w7ZrKBD6fKc50M4ptOmi3TdDtXGyczZRpLqygeOLtmb0vzvwDSj0pjMabDdD6yD';
const url = 'https://api.thecatapi.com/v1';
const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
      throw error;
    });
};
const fetchCatByBreed = breedId => {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&breed_ids=${breedId}`
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
      throw error;
    });
};

export { fetchBreeds, fetchCatByBreed };
