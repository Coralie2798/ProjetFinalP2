import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../service/experience.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit{

  restaurantForm!:FormGroup;
  constructor(private fb:FormBuilder, private es:ExperienceService, private router:Router){ }

  
  ngOnInit(): void {
    
    this.restaurantForm = this.fb.group({
      nom:[null],
      adresse:[null],
      prix_l:[null],
    })
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
