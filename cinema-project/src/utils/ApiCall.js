import qs from 'query-string';
import AxiosService from '../Service/axiosService'

const urlMovie = 'movie';
const urlDate = 'dates';


export const getAllDataMovie = () => {
    return AxiosService.get(`${urlMovie}`);
};

export const getSearchMovie = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return AxiosService.get(`${urlMovie}${queryParams}`);
};

export const getShowtimes = () => {
  return AxiosService.get(`${urlDate}`);
};

