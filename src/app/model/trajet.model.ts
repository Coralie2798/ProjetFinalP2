export class Trajet {
    ville_depart:string;
    ville_arrivee:string;
    prix_t:number;
    
    constructor(ville_depart:string, ville_arrivee:string, prix_t:number){
        this.ville_depart=ville_depart;
        this.ville_arrivee=ville_arrivee;
        this.prix_t=prix_t;
      
    }
}
