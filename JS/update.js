document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;

    const users = {
        nom: nom,
        prenom: prenom,
        email: email,
    };

    fetch("http://fbrc.esy.es/DWWM22053/Api/api.php/users/"+ id, {
        method: 'PUT',
        body: JSON.stringify(users),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur : L'utilisateur avec l'ID " +id+" n'existe pas");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
});