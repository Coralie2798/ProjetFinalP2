<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
=======
import { Injectable } from '@angular/core';
import { Compagnie } from '../model/compagnie.model';
>>>>>>> 6da28a29c2f15a90a5dd9506e5780c9b5e0d5acc

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {

<<<<<<< HEAD
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

=======
  constructor() { }

  saveCompagnie(compagnie:Compagnie){
    
  }
>>>>>>> 6da28a29c2f15a90a5dd9506e5780c9b5e0d5acc
}
