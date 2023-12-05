//Template delete

//faire en sorte que l'ID viennent d'une case où taper le nombre


let id = 42069; // Remplacez ceci par l'ID que vous souhaitez supprimer

if (confirm("Êtes-vous sûr de vouloir supprimer cette entrée ?")) { //afficher une fenêtre de confirmation

    fetch("http://fbrc.esy.es/DWWM22053/Api/api.php/users"+ id, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`ERR: cet ID n'existe pas`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));
}