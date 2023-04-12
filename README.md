# ProjetFinalP2

Ce projet a pour sujet n°2 Best Trip.

## Les developpeurs 
Les développeurs en charge de ce sujet : Coralie, Florian , Léo , Thaoura et Jérémy.
## Notion
Voici le lien de notre Backlog produit (Notion) : https://www.notion.so/ProjetFinalP2Angular-f76ef8327c6441dab97c7020a66f9bc1?pvs=4

## Resume 
Pour commencer:
creation du projet avec la commande ng new ProjetFinalP2 , 
creation de classes avec ng g class model/... --type=model,
creation de services avec ng g s service/... 
creation de composant avec ng g c component/...
creation du formulaire d'inscription Utilisateur (formModule, ReactiveForm)
Creation formulaire compagnie, Modification component user pour rafraichir la pâge lorsque l'on supprime un utilisateur.
Installation de Bootstrap avec npm install bootstrap.
Ajout d'un repertoire Git en faisant le lien avec gitHub : git remote add origin (lien gitHub)
Creation de plusieurs branches dans gitHub : test,utilisateur, experience,experienceCompletPush et guide en plus de la branche master (git branch nomBranch)
Utilisation des commandes git dans le terminal en continue : 
- git add . , git commit -m "" (ajouter un commit) 
- git  checkout (changer de branch)
- git push origin nomBranch (faire un push)
- git pull origin nomBranch (faire un pull)

Par la suite :
Mis en place d'une page de connexion avec un login et un mot de passe.

## Connexion
L'utilisateur doit être connecté pour pouvoir entrer une expérience de voyage.

## Expérience de voyage

Un formulaire pour entrée une expérience de voyage a été réalisé à l'intérieur duquel l'utilisateur doit rentrer la ville visitée,le lieu visité et à quel prix ainsi que la description de l'expérience.
Une image peut aussi être ajoutée.
On peut également ajouter les différents restaurants où l'utilisateur s'est restauré et afficher la liste de ceux-ci.
On a la possibilité de noté l'expérience de 1 à 5.
L'utilisateur a également accès à la liste des expériences où il pourra voir les détails de chaque expérience notament la destination, le lieu visité et les dépenses réalisées pour chacune d'elle.

## Guides

L'utilisateur à la possibilité d'entrer un guide avec lequel l'expérience a été réalisé en entrant le pays, la ville et le contenu de la visite.
On pourra afficher la liste des guides par rapport à la ville séléctionnée.
On peut aussi ajouter un nouveau pays et une nouvelle ville à la liste si elle n'existe pas.
On pourra supprimer et modifier cette liste à tous moments. 

