import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  getUtilisateur():Observable<Utilisateur[]>
  {  
    // return this.listeA;
    return this.http.get<Utilisateur[]>("http://localhost:8080/utilisateur/listeUtilisateur");
  }

  addUtilisateur(u:Utilisateur):Observable<Utilisateur>
  {
    return this.http.post<Utilisateur>("http://localhost:8080/utilisateur/saveUtilisateur", u);
  }



   delete(id_U:number):Observable<void>
   {
     return this.http.delete<void>("http://localhost:8080/article/delateuTILISATEUR/" + id_U)
   }
   
}