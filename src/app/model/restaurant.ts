import { Ville } from "./ville.model";

export class Restaurant {
    id_r:number;
    nom:string;
    adresse:string;
    prix_l:number;
    ville:Ville;
    

    constructor(id_r:number, nom:string,adresse:string,prix_l:number,ville:Ville){
       this.id_r=id_r;
       this.nom=nom;
       this.adresse=adresse;
       this.prix_l=prix_l;
        this.ville=ville;
    }
}
