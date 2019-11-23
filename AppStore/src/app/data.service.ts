import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  appListAPIUrl = "assets/app-list-new.json"

  constructor(private http: HttpClient) { }

  getAppList(filters?) {
    return this.http.get(this.appListAPIUrl);

  }
}
