import { Pays } from "./pays.model";

export class Ville {
    id_ville:number;
    nom:String;
    pays:Pays

    constructor(id_ville:number, nom:String, pays:Pays){
        this.id_ville=id_ville,
        this.nom=nom,
        this.pays=pays
    }
}
