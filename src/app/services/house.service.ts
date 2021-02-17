import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../../domain/house';
import { BaseHttpService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HouseServices extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  get(id: number) {
    return this.http.get<House>(this.getRoute('apartment', id.toString()));
  }

  search() {
    return this.http.get<House[]>(this.getRoute('apartment'), {
      headers: this.configureGetHttpHeaders(),
    });
  }

  update(house: House, id: number) {
    return this.http.put<House>(
      this.getRoute('apartment', id.toString()),
      house,
      {
        headers: this.configurePostHttpHeaders(),
      }
    );
  }

  insert(house: House) {
    return this.http.post<number>(this.getRoute('apartment'), house, {
      headers: this.configurePostHttpHeaders(),
    });
  }

  remove(id: number) {
    return this.http.delete<boolean>(this.getRoute('apartment', id.toString()));
  }

  all() {
    return this.http.get<House[]>(this.getRoute('apartment', 'all'), {
      headers: this.configureGetHttpHeaders(),
    });
  }
}
