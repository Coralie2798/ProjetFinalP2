import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ville } from 'src/app/model/ville.model';
import { VilleService } from 'src/app/service/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  listeV$!: Observable<Ville[]>;
  constructor(private vs:VilleService, private router:Router){}

  ngOnInit(): void {
    this.listeV$ = this.vs.getVille();
  }

  supprimer(id_ville:number)
  {
    this.vs.delete(id_ville).subscribe(()=>{this.ngOnInit()});
    this.router.navigate(['ville']);
  }


}
