import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { membres } from '../model/membre';
import { Service } from '../model/Service';
import { Rendez_vous } from '../model/Rendez_vous';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }


  Seconnecter(modele:string,email:string,password:string){
    // const url = "https://backend-sallon-de-beaute.onrender.com/login/"+modele;
    const url = "http://localhost:8282/login/"+modele;
    const Body = {
      "email" : email,
      "mdp" : password
    }
    const headers = new HttpHeaders({
      'Content-type':'application/json'
    });
    const options = {
      headers , 
      withCredentials: true
    }
    return this.httpClient.post(url,Body,options);
  }

  inscrit(mb:membres,modele:string){
    var url='http://localhost:8282/inscription/'+modele;
    const Body = {
      "nom" : mb.nom,
      "prenom" : mb.prenom,
      "email" : mb.email,
      "mdp" : mb.password
    }
    const headers = new HttpHeaders({
      'Content-type':'application/json'
    });
    const options = {
      headers , 
      withCredentials: true
    }
    return this.httpClient.post(url,Body,options);
  }
  updateService(service:Service){
    var url='http://localhost:8282/updateService/';
    const Body = {
      "id" : service._id,
      "nom" : service.nom,
      "prix" : service.prix,
      "duree" : service.duree,
      "commission" : service.commission
    }
    const headers = new HttpHeaders({
      'Content-type':'application/json'
    });
    const options = {
      headers , 
      withCredentials: true
    }
    return this.httpClient.post(url,Body,options);
  }
  gettous(modele:string){
    return this.httpClient.get('http://localhost:8282/lister/'+modele);
  }
  recherche(modele:string,motcle:string){
    return this.httpClient.get('http://localhost:8282/recherche/'+modele+'/'+motcle);
  }
  getById(modele:string,id:string){
    return this.httpClient.get('http://localhost:8282/getById/'+modele+'/'+id);
  }
  getHoraireById(id:string){
    return this.httpClient.get('http://localhost:8282/getHoraire/'+id);
  }
  UpadteHoraireById(jour:string,id:string,nouveau:string){
    return this.httpClient.get('http://localhost:8282/updateHoraire/'+jour+'/'+id+'/'+nouveau);
  }
  nouveau_service(service:Service) {
    return this.httpClient.post('http://localhost:8282/nouveau_service',service);
  }
  liste_service(){
    return this.httpClient.get('http://localhost:8282/liste_service');
  }
  liste_employer(){
    return this.httpClient.get('http://localhost:8282/liste_employer');
  }
  nouveau_rendez_vous(rendez_vous:Rendez_vous) {
    return this.httpClient.post('http://localhost:8282/nouveau_rendez_vous',rendez_vous);
  }
  liste_rendez_vous(){
    return this.httpClient.get('http://localhost:8282/liste_rendez_vous');
  }
  liste_rendez_vousbyId(id:string){
    return this.httpClient.get('http://localhost:8282/liste_rendez_vous/'+id);
  }
  liste_rendez_vous_employer(id:string){
    return this.httpClient.get('http://localhost:8282/liste_rendez_vous_employer/'+id);
  }
  payer(id:string){
    return this.httpClient.get('http://localhost:8282/payer/'+id);
  }
}
