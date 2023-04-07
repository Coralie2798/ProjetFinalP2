import { Ville } from "./ville.model";

export class Guide {
     id_guide:number;
     contenu:String;
     ville:Ville;

     constructor(id_guide:number, contenu:String, ville:Ville)
    {
        this.id_guide=id_guide;
        this.contenu=contenu;
        this.ville=ville;
    }
   
}
