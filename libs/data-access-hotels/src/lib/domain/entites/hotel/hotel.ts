import { HotelRoom } from './hotel-room';

export interface Hotel {
  name: string;
  address1: string;
  address2: string;
  starRating: string;
  images: {
    url: string;
  }[];

  rooms: Array<HotelRoom>;
}
