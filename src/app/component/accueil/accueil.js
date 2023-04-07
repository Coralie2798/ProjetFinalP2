/*la fonction recherche*/
document.getElementById('recherche').addEventListener('keyup', function(e) {
    var recherche = this.value.toLowerCase();
    var documents = document.querySelectorAll('.document');
   
    console.log(documents);
     
    Array.prototype.forEach.call(documents, function(document) {
      console.log(document);
      // On a bien trouvé les termes de recherche.
      if (document.innerHTML.toLowerCase().indexOf(recherche) > -1) {
        console.log("Valide");
        document.style.display = 'block';
      } else {
        document.style.display = 'none';
      }
    });
  });
