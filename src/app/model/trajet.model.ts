export class Trajet {
    id_T:number;
    ville_depart:string;
    ville_arrivee:string;
    prix_t:number;
    
    constructor(id_T:number, ville_depart:string, ville_arrivee:string, prix_t:number){
        this.id_T=id_T;
        this.ville_depart=ville_depart;
        this.ville_arrivee=ville_arrivee;
        this.prix_t=prix_t;
      
    }
}
