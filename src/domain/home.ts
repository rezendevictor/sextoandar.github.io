import { Address } from './address';
import { BaseEntity } from './baseEntity';

export class Home extends BaseEntity {
  rooms: number;
  suites: number;
  living_rooms: number;
  garage_spots: number;
  area: number;
  cabinet: boolean;
  description: string;
  rent_value: number;
  address: Address;
}
