import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from '../model/pays.model';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http:HttpClient) { }
  getPays():Observable<Pays[]>
  {  
    return this.http.get<Pays[]>("http://localhost:8080/pays/all");
  }
  addPays(p:Pays):Observable<Pays>
  {
    return this.http.post<Pays>("http://localhost:8080/pays/savePays", p);
  }
  delete(id_pays:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/pays/deletePays/" + id_pays)
  }
}
