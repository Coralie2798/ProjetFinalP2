
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Compagnie } from '../model/compagnie.model';






@Injectable({
  providedIn: 'root'
})
export class CompagnieService {

    url!:string
  constructor(private http: HttpClient) { }



  addCompagnie(O: Partial<{ nom: string | null; type: string | null; }>){
    console.log(O)
    
    if (O["type"]=="Aerienne"){
      this.url="http://localhost:8080/compagnie/saveCompagnieA"
    }
    else{
      this.url="http://localhost:8080/compagnie/saveCompagnieM"
    }

    return this.http.post(this.url,O).subscribe()

  }       

  

  getCompagnies(){
    return this.http.get<Compagnie[]>("http://localhost:8080/compagnie/listeCompagnie")
  }



}
