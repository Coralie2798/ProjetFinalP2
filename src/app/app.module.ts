import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { FormGroup,ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ConnexionFormulaireComponent } from './component/connexion-formulaire/connexion-formulaire.component';
import { HttpClientModule } from '@angular/common/http';
import { Experience } from './model/experience.model';
import { ExperienceComponent } from './component/experience/experience.component';
import { LieuxComponent } from './lieux/lieux.component';
import { FormulaireLieuxComponent } from './formulaire-lieux/formulaire-lieux.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    FormulaireInscriptionComponent,
    ConnexionFormulaireComponent,
    ExperienceComponent,
    LieuxComponent,
    FormulaireLieuxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
