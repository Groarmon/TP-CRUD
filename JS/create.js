document.getElementById('form').addEventListener('submit',function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const zoneErreurNom = document.getElementById('zoneErreurNom');
    const zoneErreurPrenom = document.getElementById('zoneErreurPrenom');
    const zoneErreurId = document.getElementById('zoneErreurId');

    let regExp =  /^[a-zA-Z]+$/ ;
    let regExp2 =  /^\d+$/ ;

    zoneErreurId.innerText = "";
    zoneErreurPrenom.innerText = "";
    zoneErreurNom.innerText = "";

    const users = {
        id: id,
        nom: nom,
        prenom: prenom,
        email: email,
    };

    fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users/')
  .then(response => response.json())
  .then(dataUsers => {
    const longueurRecords = dataUsers.users.records.length;
    // On recherche dans le tableau l'occurrence avec la donnée saisie
    let idExiste = false;
    for (let i = 0; i < longueurRecords; i++) {
      if (dataUsers.users.records[i][0] == id) {
        idExiste = true;
        break; 
      }
    }
    if (idExiste) {

        swal.fire({
        title: "L'ID existe déjà.",
        icon: "info"
    })
        
    } else {
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
        } else {
    
            fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users', {
                method: 'POST', // GET. DELETE. PUT.. 
                //headers: {
                    //'contentType':'application/JSON',//
                //}//
    
                body: JSON.stringify(users),
            })
            .then(response => response.json())
            .then(data => confirmationCreation(data))
            .catch(error => console.error('Erreur :', error));
        }
    }
  })
  .catch(error => console.error('Error:', error));
});

