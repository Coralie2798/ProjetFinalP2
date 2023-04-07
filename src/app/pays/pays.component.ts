import { Component } from '@angular/core';
import { Pays } from '../model/pays.model';
import { Observable } from 'rxjs';
import { PaysService } from '../service/pays.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent {

  listeP$!: Observable<Pays[]>;
  constructor(private ps:PaysService, private router:Router){}

  ngOnInit(): void {
    this.listeP$ = this.ps.getPays();
  }

  supprimer(id_pays:number)
  {
    this.ps.delete(id_pays).subscribe(()=>{this.ngOnInit()});
    this.router.navigate(['pays']);
  }
}
