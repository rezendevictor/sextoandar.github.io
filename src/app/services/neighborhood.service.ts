import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Neighborhood } from '../../domain/neighborhood';
import { BaseHttpService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class NeighborhoodServices extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  get(id: number) {
    return this.http.get<Neighborhood>(
      this.getRoute('apartment', id.toString())
    );
  }

  search() {
    return this.http.get<Neighborhood[]>(this.getRoute('apartment'), {
      headers: this.configureGetHttpHeaders(),
    });
  }

  update(neighborhood: Neighborhood, id: number) {
    return this.http.put<Neighborhood>(
      this.getRoute('apartment', id.toString()),
      neighborhood,
      {
        headers: this.configurePostHttpHeaders(),
      }
    );
  }

  insert(neighborhood: Neighborhood) {
    return this.http.post<number>(this.getRoute('apartment'), neighborhood, {
      headers: this.configurePostHttpHeaders(),
    });
  }

  remove(id: number) {
    return this.http.delete<boolean>(this.getRoute('apartment', id.toString()));
  }

  all() {
    return this.http.get<Neighborhood[]>(this.getRoute('apartment', 'all'), {
      headers: this.configureGetHttpHeaders(),
    });
  }
}
