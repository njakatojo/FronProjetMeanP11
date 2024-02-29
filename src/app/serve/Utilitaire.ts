import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class Utilitaire {
    constructor() { }
    convertirEnHeure(chiffre:any) {
       // Vérifier si le chiffre est un nombre
        if (typeof chiffre !== 'number') {
            return "Entrée invalide. Veuillez fournir un nombre.";
        }

        // Séparer la partie entière et décimale du nombre
        const partieEntiere = Math.floor(chiffre);
        const partieDecimale = Math.round((chiffre - partieEntiere) * 60);

        // Formater les parties en heures et minutes
        const heures = partieEntiere.toString().padStart(2, '0');
        const minutes = partieDecimale.toString().padStart(2, '0');

        // Retourner le résultat
        return `${heures}:${minutes}`;
    }
    convertirEnChiffre(heure:any) {
        // Vérifier si l'heure est une chaîne de caractères
        if (typeof heure !== 'string') {
        return "Entrée invalide. Veuillez fournir une chaîne de caractères.";
        }
    
        // Diviser l'heure en heures et minutes
        const [heuresStr, minutesStr] = heure.split(':');
    
        // Convertir les parties en nombre
        const heures = parseInt(heuresStr, 10);
        const minutes = parseInt(minutesStr, 10);
    
        // Calculer le nombre décimal
        const chiffre = heures + minutes / 60;
    
        // Retourner le résultat
        return chiffre;
    }
    additionnerHeure(heureString:any, nombre:any) {
        // Convertir la chaîne de caractères en objet Date avec le fuseau horaire UTC
        // Convertir la chaîne de caractères en heures et minutes
        const [heures, minutes] = heureString.split(':').map(Number);

        // Calculer la nouvelle heure et les minutes
        const nouvelleHeure = heures + Math.floor(nombre);
        const nouveauxMinutes = minutes + (nombre % 1) * 60;

        // Formater le résultat
        const resultat = `${nouvelleHeure.toString().padStart(2, '0')}:${Math.round(nouveauxMinutes).toString().padStart(2, '0')}`;

        return resultat;
    }
    comparaison(heure:any){
        const [heures, minutes] = heure.split(':').map(Number);
        const nouvelleHeure = heures + Math.floor(8);
        const nouveauxMinutes = minutes + (8 % 1) * 60;
        if (nouvelleHeure > 18 || nouvelleHeure < 7) {
            return false;
        }else if (nouvelleHeure == 18 && nouveauxMinutes > 0) {
            return false;
        }
        return true;
    }
}