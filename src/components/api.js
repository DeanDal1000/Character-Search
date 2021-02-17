import React from 'react';
import axios from 'axios';

const url = 'http://hp-api.herokuapp.com/api/characters';

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {}
};
