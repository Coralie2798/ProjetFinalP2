import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../service/experience.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ville } from '../model/ville.model';
import { Router } from '@angular/router';
import { VilleService } from '../service/ville.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurantForm!:FormGroup;
  creerVill=false
  listeVille!:Ville[];

  constructor(private fb:FormBuilder, private es:ExperienceService, private router:Router, private vs:VilleService){ }

  
  ngOnInit(): void {
    
    this.restaurantForm = this.fb.group({
      nom:[null],
      adresse:[null],
      prix_l:[null],
      listeVille: [null]
    })
    this.vs.getVille().subscribe(data=>{this.listeVille=data})
 
  }

  saveRestaurant()
    {
      this.es.addRestaurant(this.restaurantForm.value).subscribe();   
      this.restaurantForm.patchValue({ 
      nom:'',
      adresse:'',
      prix_l:'',
      }); 
    }
    creerVille(){
      this.creerVill=!this.creerVill
      
    }


}
