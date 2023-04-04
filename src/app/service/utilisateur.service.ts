import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  user!:Utilisateur

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

  getUserbyLogin(login:string){

    return this.http.get<Utilisateur>("http://localhost:8080/utilisateur/getuserbylogin/"+login)

  }



   delete(id_U:number)
   {
     return this.http.delete("http://localhost:8080/utilisateur/deleteUtilisateur/" + id_U)
   }


   getExpByUsers(u:Utilisateur){


    return this.http.get<Experience[]>("http://localhost:8080/experience/experienceIdu/"+u.id_U)
   }

}
