import { Address } from './address';
import { BaseEntity } from './baseEntity';

export class Home extends BaseEntity {
  bedrooms: number;
  suites: number;
  livingRooms: number;
  parkingSpots: number;
  size: number;
  hasCloset: boolean;
  description?: string;
  rent: number;
  addressId: number;
  address: Address;
}
