<<<<<<< HEAD
=======
import { Ville } from "./ville.model";

>>>>>>> 2fe7bf46948c77685217a7719670a2f975d4d6de
export class Lieux {

    id_L:number;
    prix_L:number;
    nom_L:string;
<<<<<<< HEAD

    constructor(id_L:number, prix_L:number, nom_L:string)
    {
        this.id_L=id_L;
        this.prix_L=prix_L;
        this.nom_L=nom_L
=======
    ville:Ville;

    constructor(id_L:number, prix_L:number, nom_L:string,ville:Ville)
    {
        this.id_L=id_L;
        this.prix_L=prix_L;
        this.nom_L=nom_L;
        this.ville=ville
>>>>>>> 2fe7bf46948c77685217a7719670a2f975d4d6de
    }
}
