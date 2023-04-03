import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lieux } from '../model/lieux.model'

@Injectable({
  providedIn: 'root'
})
export class LieuxService {

  constructor(private http:HttpClient) { }
  getLieux():Observable<Lieux[]>
  {  
    // return this.listeA;
    return this.http.get<Lieux[]>("http://localhost:8080/lieux/listeLieux");
  }
  addLieux(l:Lieux):Observable<Lieux>
  {
    return this.http.post<Lieux>("http://localhost:8080/lieux/saveLieux", l);
  }
  delete(id_L:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/lieux/deleteLieux/" + id_L)
  }
}
