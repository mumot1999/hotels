export interface Occupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}

export interface Image {
  url: string;
  alt: string;
}

export interface Facility {
  code: string;
  name: string;
}

export interface Room {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: Occupancy;
  disabledAccess: boolean;
  bedConfiguration: string;
  images: Image[];
  facilities: Facility[];
}

export interface CancellationPolicy {
  name: string;
  text: string;
  penalty: string;
  applicable: string;
  hour: string;
  amount?: number;
  days?: number;
}

export interface RatePlan {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: string;
  cancellationPolicy: CancellationPolicy;
  prePaymentValue?: number;
  prePaymentIsPercentage?: boolean;
}

export interface RoomRates {
  rooms: Room[];
  ratePlans: RatePlan[];
}
