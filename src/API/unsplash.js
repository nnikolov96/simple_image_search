import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ajpChwJ-h1Gwa0yeyu_ThSNOWTPlIUd1NAJ2-IH_8ac'
  }
});