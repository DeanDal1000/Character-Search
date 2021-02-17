import React from 'react';
import axios from 'axios';

const url =
  'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

export const fetchData = async () => {
  try {
    const {
      data: { id, name },
    } = await axios.get(url);
    return { id, name };
  } catch (error) {}
};
