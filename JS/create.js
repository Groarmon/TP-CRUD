// ON COMMENCE PAR RECUPERER LES VALEURS DES IDs

document.getElementById('form').addEventListener('submit',function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const zoneErreurNom = document.getElementById('zoneErreurNom');
    const zoneErreurPrenom = document.getElementById('zoneErreurPrenom');
    const zoneErreurId = document.getElementById('zoneErreurId');

    // ON INITIALISE LES EXPRESSIONS REGULIERES 

    let regExp =  /^[a-zA-Z]+$/ ; // SEULEMENT DES STRINGS AUTORISEES
    let regExp2 =  /^\d+$/ ; // SEULEMENT DES NOMBRES AUTORISEES

// INITIALISER LE CONTENU SPAN DES ERREURS A VIDE 
    zoneErreurId.innerText = "";
    zoneErreurPrenom.innerText = "";
    zoneErreurNom.innerText = "";

// ON CREE L'OBJET USER (tableau clé = valeur) ET ON L'INITIALISE AVEC LES VALEURS SAISIES
    const users = {
        id: id,
        nom: nom,
        prenom: prenom,
        email: email,
    };

// ON UTILISE LA REQUETE FETCH POUR RECUPERER LES INFORMATIONS DANS LA BASE DE DONNEES

fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/')
  .then(response => response.json())
  .then(dataUsers => {
    console.log(dataUsers);
    const longueurRecords = dataUsers.users.records.length;

    // On recherche dans le tableau l'occurrence avec la donnée saisie

    let idExiste = false;
    for (let i = 0; i < longueurRecords; i++) {
      if (dataUsers.users.records[i][0] == id) {
        idExiste = true;
        break; 
      }
    }
    let emailExiste = false;
    for (let i = 0; i < longueurRecords; i++) {
        if (dataUsers.users.records[i][3] == email) {
          emailExiste = true;
          break; 
        }
      }
    if (idExiste) {

        swal.fire({
        title: "L'ID existe déjà.",
        icon: "info"
    })
        
    } else if(emailExiste){

        swal.fire({
            title: "Le mail existe déjà.",
            icon: "info"
        })
    } 
       
    // ON CONTROLE LES CHAMPS DE SAISIES AVEC LES REGEX SAISIT PLUS HAUT :
    // let regExp =  /^[a-zA-Z]+$/ ; // SEULEMENT DES STRINGS AUTORISEES
    // let regExp2 =  /^\d+$/ ; // SEULEMENT DES NOMBRES AUTORISEES
    
    else {
        if (!regExp2.test(id) || !regExp.test(nom) || !regExp.test(prenom)) {
            if(!regExp2.test(id)){
                zoneErreurId.innerText = "L'Id est uniquement composé de numéros !";
                event.preventDefault();
            };
            if (!regExp.test(nom)){
            zoneErreurNom.innerText = "Le nom ne doit pas comporter de numéros !";
                event.preventDefault();
            };
            if (!regExp.test(prenom)){
                zoneErreurPrenom.innerText = "Le prénom ne doit pas comporter de numéros !";
                event.preventDefault();
            };
        } 
// ENFIN NOUS Y SOMMES : ON CREER LA REQUETE PUT 
        else { 
            fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users', {
                method: 'POST', // DELETE. PUT.. 

// ON MET NOTRE OBJET EN STRING LISIBLE PAR LA BDD
                body: JSON.stringify(users),
            })
            .then(response => response.json())
            
// ON AFFICHE CA DANS UNE JOLIE SWEET ALERT (VOIR sweetAlert.js)
            .then(data => confirmationCreation(data))
            .catch(error => console.error('Erreur :', error));
        }
    }
  })
  .catch(error => console.error('Error:', error));
});

