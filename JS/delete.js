const rechercheDeleteID = document.getElementById("idDelete");
const rechercheDeleteNom = document.getElementById("nomDelete");
const rechercheDeletePrenom = document.getElementById("prenomDelete");
const rechercheDeleteEmail = document.getElementById("emailDelete");

function fetchUserForDelete() {
    var deleteId = document.getElementById("deleteId").value;
    fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/' + deleteId)
    .then(response => {
      if (!response.ok) {
          throw new Error('Erreur ' + response.status);
      }
      return response.json();
    })
    .then(data => {

          document.getElementById("existe").className = "visible";
          document.getElementById("absent").className = "invisible";
          rechercheDeleteID.value = data.id;
          rechercheDeleteNom.value = data.nom;
          rechercheDeletePrenom.value = data.prenom;
          rechercheDeleteEmail.value = data.email;
          console.log('Nom: ' + data.nom);
          console.log('Prénom: ' + data.prenom);
          console.log('Mail: ' + data.email);
      
    })
    .catch((error) => {
      console.error('Erreur:', error);
      document.getElementById("existe").className = "invisible";
      document.getElementById("absent").className = "visible";
    });
}