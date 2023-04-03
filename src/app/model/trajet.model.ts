export class Trajet {
    ville_depart:string;
    ville_arrivee:string;
    prix_t:number;
    listeCompagnie!:[];

    constructor(ville_depart:string, ville_arrivee:string, prix_t:number, listeCompagnie:[]){
        this.ville_depart=ville_depart;
        this.ville_arrivee=ville_arrivee;
        this.prix_t=prix_t;
        this.listeCompagnie=listeCompagnie;
    }
}
