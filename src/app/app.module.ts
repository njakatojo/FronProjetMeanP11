import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { GestionpersonnelComponent } from './gestionpersonnel/gestionpersonnel.component';
import { DetailspersonnelComponent } from './detailspersonnel/detailspersonnel.component';
import { AcceuilEmployerComponent } from './acceuil-employer/acceuil-employer.component';
import { ServiceComponent } from './service/service.component';
import { NouveauRendezVousComponent } from './nouveau-rendez-vous/nouveau-rendez-vous.component';
import { AcceuilClientComponent } from './acceuil-client/acceuil-client.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { RdvEmployerComponent } from './rdv-employer/rdv-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    // AcceuilComponent,
    GestionpersonnelComponent,
    DetailspersonnelComponent,
    AcceuilEmployerComponent,
    ServiceComponent,
    NouveauRendezVousComponent,
    AcceuilClientComponent,
    InscriptionComponent,
    ListeRendezVousComponent,
    RdvEmployerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },{
        path:'login/:modele',
        component: LoginComponent
      },{
        path:'inscription/:modele',
        component: InscriptionComponent
      },{
        path:'acceuil',
        component: AcceuilComponent   
      },{
        path:'acceuilEmployer',
        component: AcceuilEmployerComponent   
      },{
        path:'gestionPersonnel',
        component: GestionpersonnelComponent
      },{
        path:'details/:id',
        component: DetailspersonnelComponent
      },{
        path:'service',
        component: ServiceComponent
      },{
        path:'nouveau_rendez_vous',
        component: NouveauRendezVousComponent
      },{
        path:'acceuilClient',
        component: AcceuilClientComponent
      },{
        path:'liste_rendez_vous',
        component: ListeRendezVousComponent
      },{
        path:'rdvEmployer',
        component: RdvEmployerComponent
      }  
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
