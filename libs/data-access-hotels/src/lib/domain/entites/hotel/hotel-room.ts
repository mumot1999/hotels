export interface HotelRoom {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: { maxAdults: number; maxChildren: number; maxOverall: number };
}
