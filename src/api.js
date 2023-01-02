const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4aac94c0082b95a9a19a0eb9b33b420a';

export function getPopular() {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => data.results);
}

export function getFilmById(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(res =>
    res.json()
  );
}

export function getFilmCast(id) {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => data.cast);
}

export function getFilmReviews(id) {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => data.results);
}

export function getFilmsByName(name) {
  return fetch(`${BASE_URL}search/movie?query=${name}&api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => data.results);
}
