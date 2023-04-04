import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuideService } from '../service/guide.service';
import { Observable } from 'rxjs';
import { Ville } from '../model/ville.model';

@Component({
  selector: 'app-formulaire-guide',
  templateUrl: './formulaire-guide.component.html',
  styleUrls: ['./formulaire-guide.component.css']
})
export class FormulaireGuideComponent {

  constructor(private fb:FormBuilder, private gs:GuideService){ }

  guideForm!:FormGroup;
  listeV$!: Observable<Ville>;

  ngOnInit(): void {

    this.guideForm = this.fb.group({
      contenu:[null]
    })
  }

    

    saveGuide()
    {
      this.gs.addGuide(this.guideForm.value).subscribe();   
      this.guideForm.patchValue({ 
        contenu:''
      }); 
    }
}
