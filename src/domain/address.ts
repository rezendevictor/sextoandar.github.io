import { BaseEntity } from './baseEntity';
import { Neighborhood } from './neighborhood';

export class Address extends BaseEntity {
  street: string;
  number: string;
  state: string;
  city: number;
  complement: string;
}
