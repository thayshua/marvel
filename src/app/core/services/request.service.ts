import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requestEndPoint: string;
  private publicKey = '4ed9f6bac6c36e54d39d0ef79e6b599d';
  private privateKey = 'aaa6ab0003d2b6d8a35de81f24ea58857ae459f2';
  private ts = new Date().getTime().toString();

  constructor(
    private http: HttpClient
  ) {
    this.requestEndPoint = 'http://gateway.marvel.com/v1/public';
  }

  get<T>(url: string, options: { key: string, name: string }[] = []): Observable<T> {
    const requestUrl = `${this.requestEndPoint}${url}`;
    const hash = this.generateHash(this.publicKey, this.privateKey, this.ts);
    const requestOptions = {
      params: new HttpParams()
        .set('apikey', this.publicKey)
        .set('ts', this.ts)
        .set('hash', hash)
    };

    if (options.length > 0) {
      options.map(option => {
        requestOptions.params = requestOptions.params.append(option.key, option.name);
      });
    }

    return this.http
      .get<T>(requestUrl, requestOptions);
  }

  private generateHash(publicKey: string, privateKey: string, ts: string) {
    return Md5.hashStr(`${ts}${privateKey}${publicKey}`).toString();
  }
}
