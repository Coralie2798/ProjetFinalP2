import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../service/experience.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurantForm!:FormGroup;
  constructor(private fb:FormBuilder, private es:ExperienceService){ }

  
  ngOnInit(): void {
    
    this.restaurantForm = this.fb.group({
      nom:[null],
      adresse:[null],
      prix:[null],
    })
  }

  saveRestaurant()
    {
      this.es.addRestaurant(this.restaurantForm.value).subscribe();   
      this.restaurantForm.patchValue({ 
      nom:'',
      adresse:'',
      prix:'',
      }); 
    }


}
