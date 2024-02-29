import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../serve/data.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../composants/loading.service';
import { membres } from '../model/membre';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  modele: any;
  mess:any;
  membre={
    nom:"",
    prenom:"",
    email:"",
    password:""
  } as membres;
  constructor(private route: ActivatedRoute,private service: DataService,public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.modele = this.route.snapshot.paramMap.get('modele');
  }
  inscrit(forme:NgForm){
    // thi
    if (forme.value.nom != "" && forme.value.prenom != "" && 
    forme.value.email != "" && forme.value.password != "" ) {
      this.membre.nom=forme.value.nom;
      this.membre.prenom=forme.value.prenom;
      this.membre.email=forme.value.email;
      this.membre.password=forme.value.password;
      this.loadingService.show();
      this.service.inscrit(this.membre,this.modele).subscribe((res)=>{
        setTimeout(() => {
          // Cacher l'animation de chargement en cas de succès
          this.loadingService.hide();
          console.log('Réponse du serveur :' + res);
          if (res == 0) {
            this.mess = "Personne deja existe !"
          }else{
            window.location.href = '/login/'+this.modele;
          }
        }, 2000); 
      },(error) => {
        setTimeout(() => {
          // Cacher l'animation de chargement en cas de succès
          this.loadingService.hide();
          console.log('Réponse du serveur :' + error);
        }, 2000);
      });
    }else{
      this.mess = "Rempliser bien les formulaires !"
    }
  }

}
