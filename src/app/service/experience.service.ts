import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Trajet } from '../model/trajet.model';
=======

import { Injectable } from '@angular/core';
import { Experience } from '../model/experience.model';
import { Restaurant } from '../model/restaurant';
>>>>>>> 6b6ad63520f1787a27e958f1347e98a87b3adaac
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

<<<<<<< HEAD
 
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
=======
  constructor(private http:HttpClient){}

  addRestaurant(resto:Restaurant):Observable<Restaurant>
  {
    return this.http.post<Restaurant>("http://localhost:8080/restaurants/save", resto);
  }


  addExperience(e:Experience):Observable<Experience>
  {
    return this.http.post<Experience>("http://localhost:8080/utilisateur/saveExperience", e);
  }

  getExperience(e:Experience):Observable<Experience>
  {
    return this.http.get<Experience>("http://localhost:8080/utilisateur/getExperience", e)
  }

>>>>>>> 6b6ad63520f1787a27e958f1347e98a87b3adaac
}
