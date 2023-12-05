document.getElementById('form').addEventListener('submit',function(event) {
    
    event.preventDefault();
   
   
       const id = document.getElementById('id').value;
       const nom = document.getElementById('nom').value;
       const prenom = document.getElementById('prenom').value;
       const email = document.getElementById('email').value;
       const zoneErreur = document.getElementById('zoneErreur');
   
       let regExp =  /\d/ ;
   
       if(regExp.test(nom) || (regExp.test(prenom))){ 
           zoneErreur.innerText = "Ne doit pas comporter de numéros !";
       };
   
       // if(!nom || !prenom){
       //     zoneErreur.innerText =  msg;
       // };
       
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