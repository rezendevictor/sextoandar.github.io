import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Home } from '../../domain/home';
import { BaseHttpService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class HomeServices extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  get(id: number) {
    return this.http.get<Home>(this.getRoute('apartment', id.toString()));
  }

  search() {
    return this.http.get<Home[]>(this.getRoute('apartment'), {
      headers: this.configureGetHttpHeaders(),
    });
  }

  update(home: Home, id: number) {
    return this.http.put<Home>(
      this.getRoute('apartment', id.toString()),
      home,
      {
        headers: this.configurePostHttpHeaders(),
      }
    );
  }

  insert(home: Home) {
    return this.http.post<number>(this.getRoute('apartment'), home, {
      headers: this.configurePostHttpHeaders(),
    });
  }

  remove(id: number) {
    return this.http.delete<boolean>(this.getRoute('apartment', id.toString()));
  }

  all() {
    return this.http.get<Home[]>(this.getRoute('apartment', 'all'), {
      headers: this.configureGetHttpHeaders(),
    });
  }
}
