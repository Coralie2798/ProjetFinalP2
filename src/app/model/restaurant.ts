export class Restaurant {
    id_r:number;
    nom:string;
    adresse:string;
    prix:number;

    constructor(id_r:number, nom:string,adresse:string,prix:number){
       this.id_r=id_r;
       this.nom=nom;
       this.adresse=adresse;
       this.prix=prix;

    }
}
