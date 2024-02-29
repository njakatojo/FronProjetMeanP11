import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from '../model/Service';
import { DataService } from '../serve/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  Service = {
    nom : "",
    prix : "",
    duree : "",
    commission : ""
  } as Service;
  mess:any
  index:any
  Services: Service[] = []
  modalDisplay = 'none';
  idValue: string = '';
  nomValue: string = '';
  proxValue: string = '';
  dureevalue: string = '';
  prixvalue: string = '';
  commisValue: string = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getAllService()
  }

  getAllService(){
    this.index = 1
    this.data.gettous("Service").subscribe((response) => {
      this.Services = response as Service[]
    }, (error) => {
      console.log(error)
    });
  }

  nouveau_service(forme:NgForm){
    this.Service.nom=forme.value.nom;
    this.Service.prix=forme.value.prix;
    this.Service.duree=forme.value.duree;
    this.Service.commission=forme.value.commission;
    this.data.nouveau_service(this.Service).subscribe(res=>{console.log(res);
      if (res == 0) {
        this.mess = "Service deja existe !"
      }else{
        window.location.href = '/service';
      }
    })
  }
  OpenModal(id: string,nom:string,duree:string,prix:string,com:string){
    this.idValue = id;
    this.nomValue = nom;
    this.dureevalue = duree;
    this.prixvalue = prix;
    this.commisValue = com;
    this.modalDisplay = 'block'; // Afficher la modal
  }
  CloseModal(){
    this.modalDisplay = 'none'; // Afficher la modal
  }
  UpdateRentrer(forme:NgForm){
    this.Service._id=this.idValue;
    this.Service.nom=this.nomValue;
    this.Service.duree=this.dureevalue;
    this.Service.prix=this.prixvalue;
    this.Service.commission=this.commisValue;
    this.data.updateService(this.Service).subscribe(res=>{console.log(res);
      this.getAllService()
    })
  }

}
