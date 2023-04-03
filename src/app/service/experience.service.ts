import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../model/experience.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient) { }


  addExperience(e:Experience):Observable<Experience>
  {
    return this.http.post<Experience>("http://localhost:8080/utilisateur/saveUtilisateur", e);
  }
}
