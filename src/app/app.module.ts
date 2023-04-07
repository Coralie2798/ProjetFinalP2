import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { FormGroup,ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ConnexionFormulaireComponent } from './component/connexion-formulaire/connexion-formulaire.component';
import { HttpClientModule } from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { FormulaireLieuxComponent } from './formulaire-lieux/formulaire-lieux.component';
import { LieuxComponent } from './lieux/lieux.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FormulaireExperienceGeneraleComponent } from './formulaire-experience-generale/formulaire-experience-generale.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TrajetComponent } from './component/trajet/trajet.component';
import { FormulaireGuideComponent } from './formulaire-guide/formulaire-guide.component';
import { GuideComponent } from './component/guide/guide.component';
import { FormulaireVilleComponent } from './formulaire-ville/formulaire-ville.component';
import { VilleComponent } from './component/ville/ville.component';



import { ListeTrajetsComponent } from './component/liste-trajets/liste-trajets.component';
import { ListeExperienceComponent } from './component/liste-experience/liste-experience.component';
import { PaysComponent } from './pays/pays.component';
import { FormulairePaysComponent } from './formulaire-pays/formulaire-pays.component';
import { TrackuserComponent } from './trackuser/trackuser.component';
import { CompagnieFormulaireComponent } from './component/compagnie-formulaire/compagnie-formulaire.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { UpdateGuideComponent } from './update-guide/update-guide.component';




@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    FormulaireInscriptionComponent,
    ConnexionFormulaireComponent,
    MainNavComponent,

    

    FormulaireLieuxComponent,
    LieuxComponent,
    ExperienceComponent,
    FormulaireExperienceGeneraleComponent,
    RestaurantComponent,

    TrajetComponent,
    CompagnieFormulaireComponent,
    FormulaireGuideComponent ,
    FormulaireGuideComponent,
    GuideComponent,
    FormulaireVilleComponent,
    VilleComponent,
    
    ListeTrajetsComponent,
    ListeExperienceComponent,
    PaysComponent,
    FormulairePaysComponent ,
    TrackuserComponent,
    AccueilComponent,
    UpdateGuideComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule ,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
