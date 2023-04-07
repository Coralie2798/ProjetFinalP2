import { Ville } from "./ville.model";

export class Lieux {

    id_L:number;
    prix_L:number;
    nom_L:string;
    ville:Ville;

    constructor(id_L:number, prix_L:number, nom_L:string,ville:Ville)
    {
        this.id_L=id_L;
        this.prix_L=prix_L;
        this.nom_L=nom_L;
        this.ville=ville
    }
}
