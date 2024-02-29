import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Rendez_vous } from '../model/Rendez_vous';
import { DataService } from '../serve/data.service';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.css']
})
export class ListeRendezVousComponent {
  sessionModele: any;
  rendez_vous : Rendez_vous[] = [];
  modalDisplay = 'none';
  hiddenValue: string = '';
  constructor(private data: DataService,private sessionStorage: SessionStorageService) { }

  ngOnInit(): void {
    this.sessionModele = this.sessionStorage.retrieve('id');
    this.getAllRdv()
    
  }
  getAllRdv(){
    this.data.liste_rendez_vousbyId(this.sessionModele).subscribe(response=>{
      // console.log(response);
      this.rendez_vous = response as Rendez_vous[];
    });
  }
  OpenModal(id: string){
    this.hiddenValue = id;
    this.modalDisplay = 'block'; // Afficher la modal
  }
  CloseModal(){
    this.modalDisplay = 'none'; // Afficher la modal
  }
  UpdateEtat(){
    const idRdv = this.hiddenValue
    this.data.payer(idRdv).subscribe(response=>{
      this.getAllRdv()
    });
  }
}
