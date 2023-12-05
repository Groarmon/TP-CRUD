
document.getElementById('formDelete').addEventListener('submit', function(event) {
    event.preventDefault();

    const idDelete = document.getElementById('idDelete').value;

    fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/')
    .then(response => response.json())
    .then(dataUsers => {
      console.log(dataUsers);

      const longueurRecords = dataUsers.users.records.length;

      console.log('Longueur du tableau dans la base de données:', longueurRecords);

      // On recherche dans le tableau l'occurrence avec la donnée saisie
      let idExiste = false;
      for (let i = 0; i < longueurRecords; i++) {
        if (dataUsers.users.records[i][0] == idDelete) {
          idExiste = true;
          break; 
        }
      }

      if (idExiste) {
        // Si l'ID existe, demander confirmation avant la suppression
        const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer l'ID " + idDelete + " ?");

        if (confirmDelete) {
          // Si la confirmation est donnée, effectuer la suppression avec la méthode DELETE
          fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/' + idDelete, {
            method: 'DELETE',
          })
            .then(response => response.json())
            .then(data => {
              console.log('Suppression réussie:', data);
              // Ici, vous pouvez effectuer d'autres actions après la suppression réussie
            })
            .catch(error => console.error('Erreur lors de la suppression:', error));
        } else {
          console.log('Suppression annulée.');
        }
      } else {
        console.log('Aucun enregistrement trouvé avec l\'ID ' + idDelete);
      }
    })
    .catch(error => console.error('Error:', error));
});

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

