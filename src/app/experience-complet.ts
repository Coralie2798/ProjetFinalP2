import { Experience } from "./model/experience.model";
import { Utilisateur } from "./model/utilisateur.model";

export class ExperienceComplet {
    private e:Experience
    private u:Utilisateur;

    constructor(e:Experience, u:Utilisateur){
        this.e=e
        this.u=u

    }
    public setuser(u:Utilisateur){
        this.u=u
    }
}
