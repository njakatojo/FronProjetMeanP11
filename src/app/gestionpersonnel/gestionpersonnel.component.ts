import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { membres } from '../model/membre';
import { DataService } from '../serve/data.service';

@Component({
  selector: 'app-gestionpersonnel',
  templateUrl: './gestionpersonnel.component.html',
  styleUrls: ['./gestionpersonnel.component.css']
})
export class GestionpersonnelComponent implements OnInit {
  
  Employer: membres[] = []
  modele: any;
  mess: any;
  motcle: any;
  index: any
  membre = {
    nom: "",
    prenom: "",
    email: "",
    password: ""
  } as membres;
  constructor(private Utilitaire: DataService) { }

  ngOnInit(): void {
    this.index = 1
    this.Utilitaire.gettous("Employer").subscribe((response) => {
      this.Employer = response as membres[]
      // console.log(this.Employer)
    }, (error) => {
      console.log(error)
    });

  }
  inscrit(forme: NgForm,mdp:string,mod:string) {
    // thi
    if (forme.value.nom != "" && forme.value.prenom != "" &&
      forme.value.email != "" && forme.value.password != "") {
      this.membre.nom = forme.value.nom;
      this.membre.prenom = forme.value.prenom;
      this.membre.email = forme.value.email;
      this.membre.password = mdp;
      this.modele = mod;
      this.Utilitaire.inscrit(this.membre,this.modele).subscribe((res)=>{
        if (res == 0) {
          this.mess = "Personne deja existe !"
        }else{
          window.location.href = '/gestionPersonnel';
        }
      },(error) => {
        console.log(error)
      });  
    }else {
      this.mess = "Rempliser bien les formulaires !"
    }
  }
  recherche(mot:any){
    if (mot != "") {
      this.motcle = mot
      this.Utilitaire.recherche("Employer",this.motcle).subscribe((response) => {
        this.Employer = response as membres[]
        //console.log(response)
      }, (error) => {
        console.log(error)
      });
    }
  }
}
