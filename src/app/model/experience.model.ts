import { Ville } from "./ville.model";

export class Experience {

    id_voyage:number;
    description:string;
    photo:string;
    depense:number;
    rating_moyen:number;
    id_trajet:number;
    ville:Ville;

    constructor( description:string, photo:string, depense:number, rating_moyen:number, id_voyage:number, id_trajet:number, ville:Ville)
    {
        this.id_voyage=id_voyage
        this.description=description,
        this.photo=photo,
        this.depense=depense,
        this.rating_moyen=rating_moyen,
        this.id_trajet=id_trajet;
        this.ville=ville;
        
    }




}
