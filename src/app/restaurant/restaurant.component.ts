import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../service/experience.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ville } from '../model/ville.model';
import { VilleService } from '../service/ville.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit{

  restaurantForm!:FormGroup;
  listeVille!:Observable<Ville[]>;
  
  constructor(private fb:FormBuilder, private es:ExperienceService, private router:Router, private vs:VilleService){ }
  
  ngOnInit(): void {
    this.restaurantForm = this.fb.group({
      nom:[null],
      adresse:[null],
      prix_l:[null],
    })
    this.listeVille=this.vs.getVilles();
  }

  saveRestaurant()
    {
      this.es.addRestaurant(this.restaurantForm.value).subscribe();   
      this.restaurantForm.patchValue({ 
      nom:'',
      adresse:'',
      prix_l:'',
      }); 
      this.router.navigate(['lieuxformulaire']);
    }

}
