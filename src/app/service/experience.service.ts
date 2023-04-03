import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trajet } from '../model/trajet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

 
  constructor(private http:HttpClient) { }

  getTrajet():Observable<Trajet[]>
  {  
    
    return this.http.get<Trajet[]>("http://localhost:8080/trajet/listeTrajet");
  }

  addTrajet(t:Trajet):Observable<Trajet>
  {
    return this.http.post<Trajet>("http://localhost:8080/trajet/saveTrajet", t);
  }



   delete(id_T:number):Observable<void>
   {
     return this.http.delete<void>("http://localhost:8080/trajet/deleteTrajet/" + id_T)
   }
}
