// ON ABONNE LE BOUTON SUBMIT DANS LE FORMULAIRE 

document.getElementById('formUpdate').addEventListener('submit', function(event) {

//ON BLOQUE PAR DEFAUT LA SOUMISSION DU FORMULAIRE
    event.preventDefault();

// ON RECUPERE LES INPUTS 
    const idUpdate = document.getElementById('idUpdate').value;
    const nomUpdate = document.getElementById('nomUpdate').value;
    const prenomUpdate = document.getElementById('prenomUpdate').value;
    const emailUpdate = document.getElementById('emailUpdate').value;
    const zoneErreurNomUpdate = document.getElementById('zoneErreurNomUpdate');
    const zoneErreurPrenomUpdate = document.getElementById('zoneErreurPrenomUpdate');

// ON DEFINIT LES EXPRESSIONS REGULIERES AUTORISEE
    let regExp =  /^[a-zA-Z]+$/ ;

// ON INITIALISE LES BALISES A VIDE 
    zoneErreurPrenomUpdate.innerText = "";
    zoneErreurNomUpdate.innerText = "";

// ON INIT L'OBJET userUpdates AVEC LES VALEURS RECUPEREES DANS LE FORMULAIRE
    const usersUpdate = {

        nom: nomUpdate,
        prenom: prenomUpdate,
        email: emailUpdate,
    };

// ON RECUPERE LA BASE DE DONNEE 
        fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/')

// PROMESSE DE REPONSE ENVOYEE ET RENVOIE UN OBJET AU FORMAT JSON
        .then(response => response.json())

// ON FAIT UNE FONCTION FLECHEE <3
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

    // ON FAIT UN POP UP SI EMAIL EXISTE
          if(emailExiste){
              swal.fire({
                  title: "Le mail existe déjà.",
                  icon: "info"
              })
           } 
    // ON CONTROLE LES REGEXPS
    // let regExp =  /^[a-zA-Z]+$/ ; SEULEMENT DES STRINGS AUTORISEE
          else {
            if (!regExp.test(nomUpdate)){
                zoneErreurNomUpdate.innerText = "Le nom ne doit pas comporter de numéros !";
                    event.preventDefault();
                };
                if (!regExp.test(prenomUpdate)){
                    zoneErreurPrenomUpdate.innerText = "Le prénom ne doit pas comporter de numéros !";
                    event.preventDefault();
                }
    // NOUS Y SOMMES: ON ENVOIE LA DANS LA BDD (pour Jean-Eudes) LES MODIFICATIONS.
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
      
