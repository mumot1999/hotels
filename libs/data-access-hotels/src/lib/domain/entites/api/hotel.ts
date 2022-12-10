export interface HotelApi {
  address1: string;
  address2: string;
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  country: string;
  countryCode: string;
  description: string;
  email: string;
  facilities: { code: string }[];
  id: string;
  images: {
    url: string;
  }[];
  name: string;
  position: { latitude: number; longitude: number; timezone: 'GMT' };
  postcode: string;
  starRating: string;
  telephone: string;
  town: string;
}
