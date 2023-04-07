import { Experience } from "./model/experience.model";
import { Trajet } from "./model/trajet.model";
import { Utilisateur } from "./model/utilisateur.model";
import { Ville } from "./ville";

export class ExperienceComplet {
    private destination:string
    private description:string
    private photo:string
    private rating_moyen:number
    private u:Utilisateur;
    private listeTrajet:Trajet[];
    private listVille:Ville[]

    constructor(destination:string,description:string,photo:string,rating_moyen:number, u:Utilisateur,lt:any,lv:any){
        this.description=description
        this.destination=destination
        this.photo=photo
        this.rating_moyen=rating_moyen
        this.u=u
        this.listeTrajet=lt
        this.listVille=lv

    }
    
}
