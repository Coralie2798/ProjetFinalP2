import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur.model';

@Component({
  selector: 'app-trackuser',
  templateUrl: './trackuser.component.html',
  styleUrls: ['./trackuser.component.css']
})
export class TrackuserComponent {

  constructor(private rout:Router){}
  user!:Observable<Utilisateur>



  

}
