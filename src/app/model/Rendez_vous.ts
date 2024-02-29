import { membres } from './membre';
import { Service } from "./Service";

export interface Rendez_vous{
    _id:string,
    client:membres,
    service:Service,
    employer:membres,
    date_heure:string,
    etat:number,
}