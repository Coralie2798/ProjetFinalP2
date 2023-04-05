import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaysService } from '../service/pays.service';

@Component({
  selector: 'app-formulaire-pays',
  templateUrl: './formulaire-pays.component.html',
  styleUrls: ['./formulaire-pays.component.css']
})
export class FormulairePaysComponent {

  constructor(private fb:FormBuilder, private ps:PaysService){ }

  paysForm!:FormGroup;

  ngOnInit(): void {

    this.paysForm = this.fb.group({
      nom:[null],
    })
  }
  savePays()
  {
    this.ps.addPays(this.paysForm.value).subscribe();   
    this.paysForm.patchValue({
      nom:'',
    }); 
  }
}
