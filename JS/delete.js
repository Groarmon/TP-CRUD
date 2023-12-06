document.getElementById('popo').addEventListener('click', function (event) {

  event.preventDefault();

  const idDelete = document.getElementById('idDelete').value;

  fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/')
    .then(response => response.json())
    .then(dataUsers => {
      const longueurRecords = dataUsers.users.records.length;

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
        Swal.fire({
          title: "Êtes-vous sûr de vouloir supprimer cet ID ?",
          text: "Vous ne pourrez pas revenir en arrière!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui",
          cancelButtonText: "Non"
        })

          .then((result) => {
            if (result.isConfirmed) {
              fetch("http://fbrc.esy.es/DWWM22053/Api/api.php/users/" + idDelete, {
                method: "DELETE",
              })
                .then(response => response.json())
                .then(data => {
                  Swal.fire(
                    "Supprimé!",
                    "L'ID à été supprimé",
                    "success"
                  )
                })

                .catch((error) => {
                  console.error('Erreur:', error);
                });
            }
            else {
              suppressionAnnule();
            }
          })
      }
      else {
        dontExist();
      }
    })
    .catch(error => console.error('Error:', error));
});
