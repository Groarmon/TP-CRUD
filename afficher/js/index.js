let idNom = document.getElementById('idNom');
let idPrenom = document.getElementById('idPrenom');
let idMail = document.getElementById('idMail');

fetch("http://fbrc.esy.es/DWWM22053/Api/api.php/users")
.then((Response)=>{
    return Response.json();
})
.then((donneesUser) => {
    const valNom = donneesUser.users.records.map(nom => nom[1]);
    const valPrenom = donneesUser.users.records.map(prenom => prenom[2]);
    const valMail = donneesUser.users.records.map(mail => mail[3]); 

    idNom.innerText = valNom[0];
    idPrenom.innerText = valPrenom[0];
    idMail.innerText = valMail[0];
});




