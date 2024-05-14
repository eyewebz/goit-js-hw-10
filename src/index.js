import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const dropdownBreedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.style.display = 'none';
error.style.display = 'none';

fetchBreeds()
  .then(breeds => {
    breeds.forEach(breed => {
      const listOption = document.createElement('option');
      listOption.textContent = breed.name;
      listOption.value = breed.id;
      dropdownBreedSelect.append(listOption);
    });
  })
  .catch(error => {
    loader.style.display = 'none';
    error.style.display = 'block';
    Notiflix.Notify.failure(error.textContent);
  });

dropdownBreedSelect.addEventListener('change', function () {
  loader.style.display = 'block';
  error.style.display = 'none';
  catInfo.style.display = 'none';
  const breedId = dropdownBreedSelect.value;
  fetchCatByBreed(breedId)
    .then(catDetails => {
      loader.style.display = 'none';
      catInfo.style.display = 'flex';
      catInfo.style.gap = '25px';
      catInfo.style.marginTop = '25px';
      catInfo.innerHTML = `<img src=${catDetails[0].url}  width="300px" alt="The ${catDetails[0].breeds[0].name} cat">
      <div><h1 class="catBreed">${catDetails[0].breeds[0].name}  </h1>
      <p>${catDetails[0].breeds[0].description}  </p>
      <h5>Temperament: ${catDetails[0].breeds[0].temperament}  </h5></div>
      `;
    })
    .catch(error => {
      loader.style.display = 'none';
      Notiflix.Notify.failure(error.textContent);
    });
});
