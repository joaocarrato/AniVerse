import axios from 'axios';

/**
 * @default ApiConfig
 * @description URL base da api já com o "/" no final.
 */

export const api = axios.create({
  baseURL: 'https://api.jikan.moe/v4/',
});
