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
    const url = "https://backprojetmeanp11.onrender.com/login/"+modele;
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
    var url='https://backprojetmeanp11.onrender.com/inscription/'+modele;
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
    var url='https://backprojetmeanp11.onrender.com/updateService/';
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
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/lister/'+modele);
  }
  recherche(modele:string,motcle:string){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/recherche/'+modele+'/'+motcle);
  }
  getById(modele:string,id:string){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/getById/'+modele+'/'+id);
  }
  getHoraireById(id:string){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/getHoraire/'+id);
  }
  UpadteHoraireById(jour:string,id:string,nouveau:string){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/updateHoraire/'+jour+'/'+id+'/'+nouveau);
  }
  nouveau_service(service:Service) {
    return this.httpClient.post('https://backprojetmeanp11.onrender.com/nouveau_service',service);
  }
  liste_service(){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/liste_service');
  }
  liste_employer(){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/liste_employer');
  }
  nouveau_rendez_vous(rendez_vous:Rendez_vous) {
    return this.httpClient.post('https://backprojetmeanp11.onrender.com/nouveau_rendez_vous',rendez_vous);
  }
  liste_rendez_vous(){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/liste_rendez_vous');
  }
  liste_rendez_vousbyId(id:string){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/liste_rendez_vous/'+id);
  }
  liste_rendez_vous_employer(id:string){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/liste_rendez_vous_employer/'+id);
  }
  payer(id:string){
    return this.httpClient.get('https://backprojetmeanp11.onrender.com/payer/'+id);
  }
}
