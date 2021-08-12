import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) {
  }
  getData() {
    let url = "https://demo-rpos.netmeds.com/rpos/uia/rest/suppliers?buId=27001";
    return this.http.get(url);
  }
}
