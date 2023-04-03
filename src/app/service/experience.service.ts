import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient){}

  addRestaurant(resto:Restaurant):Observable<Restaurant>
  {
    return this.http.post<Restaurant>("http://localhost:8080/restaurants/save", resto);
  }
}
