import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ville } from '../model/ville.model';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http: HttpClient) { }

 

  getVille():Observable<Ville[]>
  {  
    // return this.listeA;
    return this.http.get<Ville[]>("http://localhost:8080/ville/listeVille");
  }

  getVilleById(idV:number):Observable<Ville>{
    return this.http.get<Ville>("http://localhost:8080/ville/villeId"+idV);
  }

  addVille(v: Ville): Observable<Ville> {
    return this.http.post<Ville>("http://localhost:8080/ville/saveVille", v);
  }

  delete(id_ville: number) {
    return this.http.delete("http://localhost:8080/ville/deleteVille/" + id_ville)
  }
 
}
