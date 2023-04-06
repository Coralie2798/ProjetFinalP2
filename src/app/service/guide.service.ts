import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guide } from '../model/guide.model';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private http:HttpClient) { }
  getGuide():Observable<Guide[]>
  {  
    return this.http.get<Guide[]>("http://localhost:8080/guide/listeGuide");
  }
  getGuideIDV(id_ville:number):Observable<Guide[]>
  {
    return this.http.get<Guide[]>("http://localhost:8080/guide/guideIdVille/" + id_ville)
  }
  addGuide(g:Guide):Observable<Guide>
  {
    return this.http.post<Guide>("http://localhost:8080/guide/saveGuide", g);
  }
  delete(id_guide:number):Observable<void>
  {
    return this.http.delete<void>("http://localhost:8080/guide/deleteGuide/" + id_guide)
  }
}
