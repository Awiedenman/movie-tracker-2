import { API_KEY } from '../api-key';

export const movieFetch = async () => {
  const url = `https://api.themoviedb.org/3/list/1?api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw Error('failed fetch request');
  }

  return await response.json();
};

export const userLoginRequest = async (email, password) => {
  const response = await fetch('http://localhost:3000/api/users',  {
    method: 'POST',
    body: JSON.stringify({ email,  password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw Error('Oops something went wrong please try again.');
  }

  return await response.json();
};

export const userSignUpRequest= async ( name, email, password) =>  {
  const response = await fetch('http://localhost:3000/api/users/new', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
  
};