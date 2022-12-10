import { useQuery } from 'react-query';
import { fetchHotels } from './fetch-hotels';

export const useHotelsQuery = () => {
  const query = useQuery('hotels', fetchHotels);
  return query;
};
