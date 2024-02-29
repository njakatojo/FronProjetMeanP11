import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { DataService } from '../serve/data.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../composants/loading.service';  // Import du service de chargement
import { SessionStorageService } from 'ngx-webstorage';
import { membres } from '../model/membre';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  mess: any;
  modele: any;
  Employe = {
    email: "",
    password: "",
  } as membres;
  router: any;
  constructor(
    private route: ActivatedRoute, 
    private Utilitaire: DataService, 
    public loadingService: LoadingService,
    private sessionStorage: SessionStorageService
    ) { }

  ngOnInit(): void {
    this.modele = this.route.snapshot.paramMap.get('modele');
  }

  seconnecter(forme: NgForm) {
    
    // Afficher l'animation de chargement
    if (forme.value.email != "" && forme.value.password != "") {
      this.Employe.email = forme.value.email
      this.Employe.password = forme.value.password
      this.loadingService.show();
  
      this.Utilitaire.Seconnecter(this.modele, this.Employe.email, this.Employe.password).subscribe(
        (response) => {
          setTimeout(() => {
            // Cacher l'animation de chargement en cas de succès
            this.loadingService.hide();
            console.log('Réponse du serveur :' + response  );
            
            if (response == 0) {
              this.mess = "Verifier bien votre Email ou Mot de passe !"
            }else{
              if (this.modele == 'Employer') {
                window.location.href = '/acceuilEmployer';
              }else if (this.modele == 'Manager') {
                window.location.href = '/acceuil';
              }else/* if (this.modele == 'Client')*/ {
                window.location.href = '/acceuilClient';
              }
              this.sessionStorage.store('id', response);
              this.sessionStorage.store('modele', this.modele);
            }
          }, 2000);
        },
        (error) => {
          setTimeout(() => {
            // Cacher l'animation de chargement en cas de succès
            this.loadingService.hide();
            console.log('Réponse du serveur :' + error);
          }, 2000); 
        }
      );
    }else{
      this.mess = "Rempliser bien les formulaires !"
    }
  }

}
