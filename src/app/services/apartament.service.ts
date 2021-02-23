import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apartment } from '../../domain/apartment';
import { BaseHttpService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ApartamentServices extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  get(id: number) {
    return this.http.get<Apartment>(this.getRoute('property/getPropertyById', id.toString()));
  }

  search() {
    return this.http.get<any>(this.getRoute('property/getProperty'), {
      headers: this.configureGetHttpHeaders(),
    });
  }

  update(apartment: Apartment, id: number) {
    return this.http.put<Apartment>(
      this.getRoute('apartment', id.toString()),
      apartment,
      {
        headers: this.configurePostHttpHeaders(),
      }
    );
  }

  insert(apartment: Apartment) {
    return this.http.post<number>(this.getRoute('apartment'), apartment, {
      headers: this.configurePostHttpHeaders(),
    });
  }

  remove(id: number) {
    return this.http.delete<boolean>(this.getRoute('apartment', id.toString()));
  }

  all() {
    return this.http.get<Apartment[]>(this.getRoute('apartment', 'all'), {
      headers: this.configureGetHttpHeaders(),
    });
  }
}
