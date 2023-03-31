export class Utilisateur {

    id_U:number;
    nom:string;
    prenom:string;
    mail:string;
    telephone:string;
    login:string;
    mdp:string;
    abonne_nl:string;

    constructor(id_U:number, nom:string, prenom:string, mail:string, telephone:string,
        login:string, mdp:string, abonne_nl:string)
        {
          this.id_U=id_U; 
          this.nom=nom;
          this.prenom=prenom;
          this.mail=mail;
          this.telephone=telephone;
          this.login=login;
          this.mdp=mdp;
          this.abonne_nl=abonne_nl
        }


}
