import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Guide } from 'src/app/model/guide.model';
import { GuideService } from 'src/app/service/guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent{
  
  listeG$!: Observable<Guide[]>;
  constructor(private gs:GuideService, private router:Router){}

  ngOnInit(): void {
    this.listeG$ = this.gs.getGuide();
  }

  supprimer(id_guide:number)
  {
    this.gs.delete(id_guide).subscribe(()=>{this.ngOnInit()});
    this.router.navigate(['guide']);
  }


}
