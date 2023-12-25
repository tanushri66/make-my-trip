import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "http://localhost:3000/";
  httpHeaders:HttpHeaders=new HttpHeaders({
    "content-type":"application/json"
  })

  constructor(private http: HttpClient) { }

  getHotesDataFromServer(endPoint: string,obj:any) {
    let httpParms = new HttpParams()
                    .set("city",obj.city)
                    .set("checkInDate",obj.checkInDate)
                    .set("checkOutDate",obj.checkOutDate)
    const url = this.baseUrl + endPoint;
    return this.http.get(url,{headers:this.httpHeaders,params:httpParms});
  }

  getDataFromServer(endPoint: string) {
    const url = this.baseUrl + endPoint;
    return this.http.get(url,{headers:this.httpHeaders});
  }
  
}
