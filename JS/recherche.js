const rechercheID = document.getElementById("idUpdate");
const rechercheNom = document.getElementById("nomUpdate");
const recherchePrenom = document.getElementById("prenomUpdate");
const rechercheEmail = document.getElementById("emailUpdate");

function fetchUser() {
    var userId = document.getElementById("userId").value;
   
 

  fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/')
  .then(response => response.json())
  .then(dataUsers => {
    const longueurRecords = dataUsers.users.records.length;
    // On recherche dans le tableau l'occurrence avec la donnée saisie
    let idExiste = false;
    for (let i = 0; i < longueurRecords; i++) {
      if (dataUsers.users.records[i][0] == userId) {
        idExiste = true;
        break; 
      }
    }
    if (idExiste) {
      fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/' + userId)
      .then(response => response.json())
      .then(data => {
        rechercheID.value = data.id;
        rechercheNom.value = data.nom;
        recherchePrenom.value = data.prenom;
        rechercheEmail.value = data.email;
        console.log('Nom: ' + data.nom);
        console.log('Prénom: ' + data.prenom);
        console.log('Mail: ' + data.email);
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
    } else {
      dontExist();
    }
  })
  .catch(error => console.error('Error:', error));

}