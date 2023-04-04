export class Trajet {
    id_t:number;
    ville_depart:string;
    ville_arrivee:string;
    prix_t:number;
    
    constructor(id_t:number, ville_depart:string, ville_arrivee:string, prix_t:number){
        this.id_t=id_t;
        this.ville_depart=ville_depart;
        this.ville_arrivee=ville_arrivee;
        this.prix_t=prix_t;
      
    }
}
