import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ExperienceComponent } from './component/experience/experience.component';


=======
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { FormGroup,ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ConnexionFormulaireComponent } from './component/connexion-formulaire/connexion-formulaire.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 698a33edcca081253b8741cdbb345fea730cd7e9

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    UtilisateurComponent,
    FormulaireInscriptionComponent,
    ConnexionFormulaireComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
>>>>>>> 698a33edcca081253b8741cdbb345fea730cd7e9
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
