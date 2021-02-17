import { BaseEntity } from './baseEntity';
import { Neighborhood } from './neighborhood';

export class Address extends BaseEntity {
  street: string;
  number: number;
  postalCode: string;
  neighborhoodId: number;
  neighborhood: Neighborhood;
}
