import qs from 'query-string';
import AxiosService from '../Service/axiosService'

const urlMovie = 'movie';


export const getAllDataMovie = () => {
    return AxiosService.get(`${urlMovie}`);
};

export const getSearchMovie = (params = {}) => {
  let queryParams = '';
  console.log('pram:', params)
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
console.log('qr:', `${urlMovie}${queryParams}`)
  return AxiosService.get(`${urlMovie}${queryParams}`);
};

