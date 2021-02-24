import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visit } from '../../domain/visit';
import { BaseHttpService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class VisitServices extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }
  public insert(visit: Visit) {
    return this.http.post<any>(this.getRoute('visitation', ''), visit, {
      headers: this.configurePostHttpHeaders(),
    });
  }
}
