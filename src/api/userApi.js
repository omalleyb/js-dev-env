/*
  similar to the repository pattern
  abstracts away the database
*/
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

// the only public function
export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
