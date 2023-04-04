import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  getUtilisateurTri():Observable<Utilisateur[]>{ //Donne les utilisateurs avec le plus grand nombre de guides
    return this.http.get<Utilisateur[]>("http://localhost:8080/utilisateur/listeUtilisateurTri")
  }

  getUtilisateur():Observable<Utilisateur[]>
  {  
    // return this.listeA;
    return this.http.get<Utilisateur[]>("http://localhost:8080/utilisateur/listeUtilisateur");
  }

  addUtilisateur(u:Utilisateur):Observable<Utilisateur>
  {
    return this.http.post<Utilisateur>("http://localhost:8080/utilisateur/saveUtilisateur", u);
  }



   delete(id_U:number)
   {
     return this.http.delete("http://localhost:8080/utilisateur/deleteUtilisateur/" + id_U)
   }


}
