export class Restaurant {
    id_r:number;
    nom:string;
    adresse:string;
    prix_l:number;

    constructor(id_r:number, nom:string,adresse:string,prix_l:number){
       this.id_r=id_r;
       this.nom=nom;
       this.adresse=adresse;
       this.prix_l=prix_l;

    }
}
