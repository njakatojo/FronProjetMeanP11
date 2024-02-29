import { Component } from '@angular/core';
import { DataService } from '../serve/data.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Rendez_vous } from '../model/Rendez_vous';

@Component({
  selector: 'app-rdv-employer',
  templateUrl: './rdv-employer.component.html',
  styleUrls: ['./rdv-employer.component.css']
})

export class RdvEmployerComponent {
  sessionModele: any;
  constructor(private data: DataService,private sessionStorage: SessionStorageService) { }
  rendez_vous : Rendez_vous[] = [];
  ngOnInit(): void {
    this.sessionModele = this.sessionStorage.retrieve('id');
    this.getAllRdv()
  }
  getAllRdv(){
    this.data.liste_rendez_vous_employer(this.sessionModele).subscribe(response=>{
      this.rendez_vous = response as Rendez_vous[];
    });
  }
}
