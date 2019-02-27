// import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Info } from '../domain/info.model';

@Injectable({
  providedIn: 'root'
})
export class SearchinfoService {

  // url = http://localhost:3004/result;

 constructor(private http: HttpClient) { }

 getAll(){
    console.log("In get all");
    return this.http.get("http://localhost:3004/result");
  //  return this.http.get<Info[]>(this.url + '?_sort=ConfidenceScore&_order=desc');
    }
  
}
