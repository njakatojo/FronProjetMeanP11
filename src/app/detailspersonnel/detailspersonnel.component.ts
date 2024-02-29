import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { HeureParJour } from '../model/HeureParJour';
import { Horaire } from '../model/Horaire';
import { HoraireParEmployer } from '../model/HoraireParEmployer';
import { jour } from '../model/jour';
import { jourOuvrable } from '../model/jourOuvrable';
import { membres } from '../model/membre';
import { DataService } from '../serve/data.service';
import { Utilitaire } from '../serve/Utilitaire';

@Component({
  selector: 'app-detailspersonnel',
  templateUrl: './detailspersonnel.component.html',
  styleUrls: ['./detailspersonnel.component.css']
})
export class DetailspersonnelComponent {
  sessionModele: any;
  modalDisplay = 'none';
  hiddenValue: string = '';
  id: any;
  durer: any;
  jour: any;
  mess: any;
  Monday: any;
  Tuesday: any;
  Wednesday: any;
  Thursday: any;
  Friday : any;
  Saturday : any;
  Employer: membres[] = [];
  Horaire: Horaire[] = [];
  jourOuvrable: jourOuvrable[] = [];
  EmployerHoraire = {
    lundi : {rentrer : "",duree : ""}as HeureParJour,
    mardi : {rentrer : "",duree : ""}as HeureParJour,
    mercredi : {rentrer : "",duree : ""}as HeureParJour,
    jeudi : {rentrer : "",duree : ""}as HeureParJour,
    vendredi : {rentrer : "",duree : ""}as HeureParJour,
    samedi : {rentrer : "",duree : ""}as HeureParJour,
  } as HoraireParEmployer
  modele: any;
  constructor(
    private route: ActivatedRoute, 
    private Service: DataService,
    private AutreFonction: Utilitaire,
    private sessionStorage: SessionStorageService
    ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetailsEmployer()
    this.getHoraireEmployer()
    this.getJourOuvrable()
    // console.log(this.AutreFonction.convertirEnChiffre("10:01"));
  }
  getDetailsEmployer(){
    // this.sessionModele = this.sessionStorage.retrieve('modele');
    this.Service.getById("Employer",this.id).subscribe((response) => {
      this.Employer = response as membres[]
    }, (error) => {
      console.log(error)
    });
  }
  getJourOuvrable(){
    // this.sessionModele = this.sessionStorage.retrieve('modele');
    this.Service.gettous("jourouvrable").subscribe((response) => {
      this.jourOuvrable = response as jourOuvrable[]
      console.log(this.jourOuvrable)
    }, (error) => {
      console.log(error)
    });
  }
  getHoraireEmployer(){
    this.Service.getHoraireById(this.id).subscribe((response) => {
      this.Horaire = response as Horaire[]
      this.RemplirHoraire(this.Horaire)
    }, (error) => {
      console.log(error)
    });
  }
  RemplirHoraire(donnee:Horaire[]){
    this.Monday = donnee[0].lundi.rentrer+" - "+this.AutreFonction.additionnerHeure(donnee[0].lundi.rentrer, donnee[0].lundi.duree)
    this.Tuesday = donnee[0].mardi.rentrer+" - "+this.AutreFonction.additionnerHeure(donnee[0].mardi.rentrer, donnee[0].mardi.duree)
    this.Wednesday = donnee[0].mercredi.rentrer+" - "+this.AutreFonction.additionnerHeure(donnee[0].mercredi.rentrer, donnee[0].mercredi.duree)
    this.Thursday = donnee[0].jeudi.rentrer+" - "+this.AutreFonction.additionnerHeure(donnee[0].jeudi.rentrer, donnee[0].jeudi.duree)
    this.Friday = donnee[0].vendredi.rentrer+" - "+this.AutreFonction.additionnerHeure(donnee[0].vendredi.rentrer, donnee[0].vendredi.duree)
    this.Saturday = donnee[0].samedi.rentrer+" - "+this.AutreFonction.additionnerHeure(donnee[0].samedi.rentrer, donnee[0].samedi.duree)
  }
  UpdateRentrer(forme: NgForm){
    if (forme.value.rentrer != "") {
      let rentrer = forme.value.rentrer;
      let jour = forme.value.jour;
      let test = this.AutreFonction.comparaison(rentrer)
      if (test == true) {
        this.Service.UpadteHoraireById(jour,this.Horaire[0]._id,rentrer).subscribe(response =>{
          this.getHoraireEmployer()
        },(error) =>{
          console.log(error)
        })
        this.mess = "mis a jour reussi"
      }else{
        this.mess = "Erreur !!"
      }
    }else{
      this.mess = "Remplisser le formulaire !!"
    }
  }
  OpenModal(jour: string){
    this.hiddenValue = jour;
    this.modalDisplay = 'block'; // Afficher la modal
  }
  CloseModal(){
    this.modalDisplay = 'none'; // Afficher la modal
  }
  
}
