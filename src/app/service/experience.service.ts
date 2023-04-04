import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trajet } from '../model/trajet.model';
import { Experience } from '../model/experience.model';
import { Restaurant } from '../model/restaurant';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

 
  

  getTrajet():Observable<Trajet[]>
  {  
    
    return this.http.get<Trajet[]>("http://localhost:8080/trajet/listeTrajet");
  }

  addTrajet(t:Trajet):Observable<Trajet>
  {
    return this.http.post<Trajet>("http://localhost:8080/trajet/saveTrajet", t);
  }



   delete(id_t:number):Observable<void>
   {
     return this.http.delete<void>("http://localhost:8080/trajet/deleteTrajet/" + id_t)
   }
  constructor(private http:HttpClient){}

  addRestaurant(resto:Restaurant):Observable<Restaurant>
  {
    return this.http.post<Restaurant>("http://localhost:8080/restaurants/save", resto);
  }


  addExperience(e:Experience):Observable<Experience>
  {
    return this.http.post<Experience>("http://localhost:8080/experience/saveExperience", e);
  }


}
