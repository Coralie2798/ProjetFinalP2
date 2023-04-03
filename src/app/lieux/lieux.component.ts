import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lieux } from '../model/lieux.model';
import { LieuxService } from '../service/lieux.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lieux',
  templateUrl: './lieux.component.html',
  styleUrls: ['./lieux.component.css']
})
export class LieuxComponent implements OnInit{

  listeL$!: Observable<Lieux[]>;
  constructor(private ls:LieuxService, private router:Router){}

  ngOnInit(): void {
    this.listeL$ = this.ls.getLieux();
  }

  supprimer(id_L:number)
  {
    this.ls.delete(id_L).subscribe(()=>{this.ngOnInit()});
    this.router.navigate(['lieux']);
  }
}
