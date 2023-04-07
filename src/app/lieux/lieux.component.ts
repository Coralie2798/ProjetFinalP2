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
<<<<<<< HEAD
    this.ls.delete(id_L);
=======
    this.ls.delete(id_L).subscribe(()=>{this.ngOnInit()});
>>>>>>> 2fe7bf46948c77685217a7719670a2f975d4d6de
    this.router.navigate(['lieux']);
  }
}
