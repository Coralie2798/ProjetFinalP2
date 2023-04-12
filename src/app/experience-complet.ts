import { Experience } from "./model/experience.model";
import { Lieux } from "./model/lieux.model";
import { Restaurant } from "./model/restaurant";
import { Trajet } from "./model/trajet.model";
import { Utilisateur } from "./model/utilisateur.model";
import { Ville } from "./model/ville.model";

export class ExperienceComplet {
    
    private description:string
    private photo:string
    private rating_moyen:number
    private u:Utilisateur;
    private listeResto:Restaurant[];
    private listeLieux:Lieux[];
    private ville:any


    constructor(description:string,photo:string,rating_moyen:number, u:Utilisateur, listeResto:Restaurant[], listeLieux:Lieux[], v:any){
        this.description=description
        
        this.photo=photo
        this.rating_moyen=rating_moyen
        this.u=u
        this.listeLieux=listeLieux
        this.listeResto=listeResto
        this.ville=v

    }
    
}
