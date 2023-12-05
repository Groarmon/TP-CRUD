// Récupération JSON de l'API
fetch('http://fbrc.esy.es/DWWM22053/Api/api.php/users')
    .then((reponse) => {
        return reponse.json();
    })
    .then((donneeUser) => {
        let valId =  donneeUser.users.records;
        const valNom = donneeUser.users.records.map(index => index[1]);
        const valPrenom = donneeUser.users.records.map(index => index[2]);
        const valMail = donneeUser.users.records.map(index => index[3]);

        var nbrUser = donneeUser.users.records.length;
        console.log(valId)

        let indice = 0;
        for (let i = 0; i < nbrUser; i++) {
            creerListe(valId[indice][0], valNom[i], valPrenom[i], valMail[i]);
            var li = document.createElement("li");
            li.classList.add("list-group-item");
            indice ++;
        }
        
    });
    
    function creerListe(id, nom, prenom, mail) {
        // Création de l'élément ul avec la classe bootstrap
        var ul = document.createElement("ul");
        ul.classList.add("list-group", "list-group-horizontal", "col-8");

        // Création des éléments li avec les classes Bootstrap
        for (let i = 0; i < 3; i++) {
            var li = document.createElement("li");
            li.classList.add("list-group-item");
            var tli = document.createElement("li");
            tli.classList.add("list-group-item", "text-item", "text-white", "bg-black");

            if (i === 0) {
                // Ajout de la première li avec l'ID et le texte spécifique
                tli.innerText = id;
                ul.appendChild(tli);
                li.innerText =  nom;
            } else if (i === 1) {
                // Ajout de la deuxième li avec le texte spécifique
                li.innerText =  prenom;
            } else  {
                // Ajout de la troisième li avec le texte spécifique
                li.innerText = mail;
            }

            // Ajout de l'élément li à l'élément ul
            ul.appendChild(li);
        }

        // Ajout de l'élément ul au corps du document
        document.body.appendChild(ul);
    }