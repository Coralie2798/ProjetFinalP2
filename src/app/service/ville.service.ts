import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ville } from '../model/ville.model';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http:HttpClient) { }

  
  getVilles(){
    return this.http.get<Ville[]>("http://localhost:8080/ville/listeVille")
  }

  
}
