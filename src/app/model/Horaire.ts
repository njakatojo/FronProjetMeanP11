import { jour } from "./jour";
import { membres } from "./membre";

export interface Horaire{
    _id:string,
    employer:membres;
    lundi:jour;
    mardi:jour;
    mercredi:jour;
    jeudi:jour;
    vendredi:jour;
    samedi:jour;
}