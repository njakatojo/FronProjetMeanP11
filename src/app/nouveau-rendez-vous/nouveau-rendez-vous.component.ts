import { membres } from './../model/membre';
import { Component } from '@angular/core';
import { Service } from '../model/Service';
import { Rendez_vous } from '../model/Rendez_vous';
import { DataService } from '../serve/data.service';
import { NgForm } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-nouveau-rendez-vous',
  templateUrl: './nouveau-rendez-vous.component.html',
  styleUrls: ['./nouveau-rendez-vous.component.css']
})
export class NouveauRendezVousComponent {
  sessionModele: any;
  clientConnecter = {
    nom: "",
    prenom: "",
    email: "",
    password: ""
  } as membres;
  services : Service[] = [];
  client : membres[] = [];
  employers : membres[] = [];
  Service = {
    nom : "",
    prix : "",
    duree : "",
    commission : ""
  } as Service;

  Employer = {
    nom: "",
    prenom: "",
    email: "",
    password: ""
  } as membres;

  date_heure : string = "";

  Rendez_vous = {
    service : this.Service,
    employer : this.Employer,
    date_heure : ""
  } as Rendez_vous;

  //service : string[] = [];

    constructor(private data: DataService,private sessionStorage: SessionStorageService) { }

  ngOnInit(): void {
    this.data.liste_service().subscribe(response=>{
      // console.log(response);
      this.services = response as Service[];
    });

    this.data.liste_employer().subscribe(response=>{
      // console.log(response);
      this.employers = response as membres[];
    });

    this.sessionModele = this.sessionStorage.retrieve('id');
    this.data.getById("Client",this.sessionModele).subscribe(response=>{
      this.client = response as membres[];
      this.clientConnecter._id = this.client[0]._id;
      this.clientConnecter.nom = this.client[0].nom;
      this.clientConnecter.prenom = this.client[0].prenom;
      this.clientConnecter.email = this.client[0].email;
    });
  }

  nouveau_rdv(forme:NgForm){
    this.Rendez_vous.client = this.clientConnecter;
    this.Service._id = forme.value.service._id;
    this.Service.nom = forme.value.service.nom;
    this.Service.prix = forme.value.service.prix;
    this.Service.duree = forme.value.service.duree;
    this.Service.commission = forme.value.service.commission;
    this.Employer._id = forme.value.employer._id;
    this.Employer.nom = forme.value.employer.nom;
    this.Employer.prenom = forme.value.employer.prenom;
    this.Employer.email = forme.value.employer.email;
    this.Employer.password = forme.value.employer.mdp;
    this.date_heure = forme.value.date_heure;
    this.Rendez_vous.date_heure = this.date_heure.split('T')[0]+" "+this.date_heure.split('T')[1];
    this.Rendez_vous.etat = 0;
    console.log(this.Rendez_vous);
    this.data.nouveau_rendez_vous(this.Rendez_vous).subscribe(res=>{
      window.location.href = "acceuilClient"
    })

  }
}
