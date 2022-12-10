import { Hotel } from './domain';
import { HotelApi } from './domain/entites/api/hotel';
import { RoomRates } from './domain/entites/api/room-rates';

export async function fetchHotels(): Promise<Array<Hotel>> {
  const hotels = await fetch(
    'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG'
  ).then<HotelApi[]>((res) => res.json());

  const fetchRoomRates = (id: string) =>
    fetch(
      `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`
    ).then<RoomRates>((res) => res.json());

  const hotelsWithRooms = Promise.all(
    hotels.map<Promise<Hotel>>(async (hotel) => {
      const hotelRooms = await fetchRoomRates(hotel.id);

      return { ...hotel, rooms: hotelRooms.rooms };
    })
  );

  return hotelsWithRooms;
}
