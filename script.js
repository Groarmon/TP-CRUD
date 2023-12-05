
// BOUTON RADIO POUR AFFICHER LES DIFFERENTS FORMULAIRES (Jean-Eudes, Fayssal)
document.addEventListener('DOMContentLoaded', function () {
    const radioCreate = document.getElementById('radioCreate');
    const radioUpdate = document.getElementById('radioUpdate');
    const radioDelete = document.getElementById('radioDelete');

    const formCreate = document.getElementById('formCreate');
    const formUpdate = document.getElementById('formUpdate');
    const formDelete = document.getElementById('formDelete');

    radioCreate.addEventListener('change', function () {
        if (this.checked) {
            formCreate.style.display = 'block';
            formCreate.style.visibility = 'visible';

            formUpdate.style.display = 'none';
            formUpdate.style.visibility = 'hidden';

            formDelete.style.display = 'none';
            formDelete.style.visibility = 'hidden';
        }
    });

    radioUpdate.addEventListener('change', function () {
        if (this.checked) {
            formCreate.style.display = 'none';
            formCreate.style.visibility = 'hidden';

            formUpdate.style.display = 'block';
            formUpdate.style.visibility = 'visible';

            formDelete.style.display = 'none';
            formDelete.style.visibility = 'hidden';
        }
    });

    radioDelete.addEventListener('change', function () {
        if (this.checked) {
            formCreate.style.display = 'none';
            formCreate.style.visibility = 'hidden';

            formUpdate.style.display = 'none';
            formUpdate.style.visibility = 'hidden';

            formDelete.style.display = 'block';
            formDelete.style.visibility = 'visible';
        }
    });
});

// METHODE CREATE (Jean-Eudes, Fayssal)
document.getElementById('formCreate').addEventListener('submit',function(event) {
    
event.preventDefault();

const id = document.getElementById('id').value;
const nom = document.getElementById('nom').value;
const prenom = document.getElementById('prenom').value;
const email = document.getElementById('email').value;

const users = {
    id: id,
    nom: nom,
    prenom: prenom,
    email: email,
};

fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users', {
    method: 'POST', // GET. DELETE. PUT.. 
    /**headers: {
        'contentType':'application/JSON',
    },**/
    
    body: JSON.stringify(users),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur :', error));

}
)
// METHODE PATCH (UPDATE) (Jean-Eudes, Fayssal, Sylvain)
document.getElementById('formUpdate').addEventListener('submit', function(event) {
    event.preventDefault();

    const idUpdate = document.getElementById('idUpdate').value;
    const nomUpdate = document.getElementById('nomUpdate').value;
    const prenomUpdate = document.getElementById('prenomUpdate').value;
    const emailUpdate = document.getElementById('emailUpdate').value;

    const usersUpdate = {
        nom: nomUpdate,
        prenom: prenomUpdate,
        email: emailUpdate,
    };

    //console.log(donneeUser.users.records[1][0] === idUpdate);

    fetch("http://fbrc.esy.es/DWWM22053/Api/api.php/users/" + idUpdate, {
        
        method: 'PATCH',
        body: JSON.stringify(usersUpdate),
    })

    .then(response => {
        return response.json();
    })
    
    .then(usersUpdate => console.log(usersUpdate))
    .catch(error => console.error(error));
});