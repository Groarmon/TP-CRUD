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
