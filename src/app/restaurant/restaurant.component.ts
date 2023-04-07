import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../service/experience.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ville } from '../model/ville.model';
import { VilleService } from '../service/ville.service';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurantForm!:FormGroup;
  creerVill=false
  listeVille!:Ville[];
  v!:Ville

  constructor(private fb:FormBuilder, private es:ExperienceService, private router:Router, private vs:VilleService){ }

  
  ngOnInit(): void {
    this.restaurantForm = this.fb.group({
      nom:[null],
      adresse:[null],
      prix_l:[null],
      listeVille: [null],
      v:[null]
    })
    this.vs.getVille().subscribe(data=>{this.listeVille=data})
 
  }

  saveRestaurant()
    {
      console.log("Ville :" + this.v)
      this.es.addRestaurant(new Restaurant(0,this.restaurantForm.value.nom,this.restaurantForm.value.adresse,this.restaurantForm.value.prix_l,this.v)).subscribe();   
      this.restaurantForm.patchValue({ 
      nom:'',
      adresse:'',
      prix_l:'',
      }); 
      this.router.navigate(['lieuxformulaire']);
    }
    creerVille(){
      this.creerVill=!this.creerVill
      
    }
    villeselectionne(v:Ville){
      this.v = v;
  
    }

}
