// Récuperation des élements HTML
let idNom = document.getElementById('idNom');
let idPrenom = document.getElementById('idPrenom');
let idMail = document.getElementById('idMail');

// Récupération JSON de l'API
fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users')
    .then((reponse) => {
        return reponse.json();
    })
    .then((donneeUser) => {
        const valNom = donneeUser.users.records.map(index => index[1]);
        const valPrenom = donneeUser.users.records.map(index => index[2]);
        const valMail = donneeUser.users.records.map(index => index[3]);

        var nbrUser = donneeUser.users.records.length;

        for (let i = 0; i < nbrUser; i++) {
            creerListe(valNom[i], valPrenom[i], valMail[i]);
        }

    });

function creerListe(nom, prenom, mail) {
    // Création de l'élément ul avec la classe boostrap
    var ul = document.createElement("ul");
    ul.classList.add("list-group", "list-group-horizontal");

    // Création de trois éléments li avec les classes boostrap
    for (let i = 0; i < 3; i++) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");

        if (i === 0) {
            li.id = "idNom";
            li.innerText = nom;
        } else if (i === 1) {
            li.id = "idPrenom";
            li.innerText = prenom;
        } else {
            li.id = "idMail";
            li.innerText = mail;
        }

        // Ajout de l'élément li à l'élément ul
        ul.appendChild(li);
    }

    // Ajout de l'élément ul au corps du document
     document.body.appendChild(ul);
}
