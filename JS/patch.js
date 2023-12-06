document.getElementById('formUpdate').addEventListener('submit', function(event) {
    event.preventDefault();

    const idUpdate = document.getElementById('idUpdate').value;
    const nomUpdate = document.getElementById('nomUpdate').value;
    const prenomUpdate = document.getElementById('prenomUpdate').value;
    const emailUpdate = document.getElementById('emailUpdate').value;
    const zoneErreurNomUpdate = document.getElementById('zoneErreurNomUpdate');
    const zoneErreurPrenomUpdate = document.getElementById('zoneErreurPrenomUpdate');

    let regExp =  /^[a-zA-Z]+$/ ;
    
    zoneErreurPrenomUpdate.innerText = "";
    zoneErreurNomUpdate.innerText = "";

    const usersUpdate = {

        nom: nomUpdate,
        prenom: prenomUpdate,
        email: emailUpdate,
    };


        fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/')
        .then(response => response.json())
        .then(dataUsers => {
          const longueurRecords = dataUsers.users.records.length;
          // On recherche dans le tableau l'occurrence avec la donnée saisie
          let emailExiste = false;
          for (let i = 0; i < longueurRecords; i++) {
              if (dataUsers.users.records[i][3] == emailUpdate) {
                emailExiste = true;
                break; 
              }
            }
          
          if(emailExiste ){
      
              swal.fire({
                  title: "Le mail existe déjà.",
                  icon: "info"
              })
      
          } else {

            if (!regExp.test(nomUpdate)){
                zoneErreurNomUpdate.innerText = "Le nom ne doit pas comporter de numéros !";
                    event.preventDefault();
                };
                if (!regExp.test(prenomUpdate)){
                    zoneErreurPrenomUpdate.innerText = "Le prénom ne doit pas comporter de numéros !";
                    event.preventDefault();
                }
                 else {
          
                    fetch("http://fbrc.esy.es/DWWM22053/Api/api.php/users/" + idUpdate, {
        
                    method: 'PUT',
                    body: JSON.stringify(usersUpdate),
                })
            
                .then(response => {
                    return response.json();
                })
                
                .then(usersUpdate => confirmationModification(idUpdate))
                .catch(error => console.error(error));
              }
          }
        })
        .catch(error => console.error('Error:', error));
      });
      

      
    //console.log(donneeUser.users.records[1][0] === idUpdate);
    