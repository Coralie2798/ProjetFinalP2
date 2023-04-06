import { Experience } from "./model/experience.model";
import { Utilisateur } from "./model/utilisateur.model";

export class ExperienceComplet {
    private destination:string
    private description:string
    private photo:string
    private rating_moyen:number
    private u:Utilisateur;

    constructor(destination:string,description:string,photo:string,rating_moyen:number, u:any){
        this.description=description
        this.destination=destination
        this.photo=photo
        this.rating_moyen=rating_moyen
        this.u=u

    }
    public setuser(u:Utilisateur){
        this.u=u
    }
}
