document.getElementById('form').addEventListener('submit',function(event) {
    
 event.preventDefault();


    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const zoneErreur = document.getElementById('zoneErreur');

    let regExp =  /\d/ ;
    let regExpMail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let msg = "Certains champs sont mal saisi !";

    if(regExp.test(nom) || (regExp.test(prenom))){ 
        console.log("nom ou prenom faux");
        zoneErreur.innerText = msg;
    };

    if(!nom || !prenom | !email){
        console.log("manque valeurs");
        zoneErreur.innerText =  msg;
    };
    
    if(regExpMail.test(!email)){
        console.log("mauvais format email");
        zoneErreur.innerText = msg;

    };

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

});
