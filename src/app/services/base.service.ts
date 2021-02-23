import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_SERVER_ROUTE = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseHttpService {
  constructor() {}

  getRoute(action: string, key: string = null) {
    return key
      ? `${API_SERVER_ROUTE}/${action}/${key}`
      : `${API_SERVER_ROUTE}/${action}`;
  }
  /**
   * Configura os cabe�alhos da requisi��o GET.
   **/
  configureGetHttpHeaders(contentType = 'application/json'): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': contentType,
      Accept: 'application/json',
    });
  }

  /**
   * Configura os cabe�alhos da requisi��o POST.
   **/
  configurePostHttpHeaders(contentType = 'application/json'): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': contentType,
    });
  }

  /**
   * Configura o form data
   **/
  configureFormDataHeaders(): HttpHeaders {
    return new HttpHeaders({});
  }

  /**
   * Configura o cabeçalho para requisição DELETE
   */
  configureDeleteHttpHeaders(body: any = undefined) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    if (body) {
      options['body'] = body;
    }

    return options;
  }

  /**
   * Configura os par�metros da requisi��o
   **/
  configureHttpParams(parameters: Map<string, string>): HttpParams {
    var params = new HttpParams();

    parameters.forEach((value, key) => {
      params = params.append(key, value);
    });
    return params;
  }

  /**
   * Mapea os par�metros de acordo com os filtros
   * @param filters Os filtros a serem aplicados
   */
  mapParameters(filters): Map<string, string> {
    var map = new Map<string, string>();

    for (var index in filters) {
      map.set(filters[index]['name'], filters[index]['value']);
    }

    return map;
  }
}
