
// BOUTON RADIO POUR AFFICHER LES DIFFERENTS FORMULAIRES (Jean-Eudes, Fayssal)
document.addEventListener('DOMContentLoaded', function () {
    const radioCreate = document.getElementById('radioCreate');
    const radioUpdate = document.getElementById('radioUpdate');
    const radioDelete = document.getElementById('radioDelete');

    const formCreate = document.getElementById('formCreate');
    const formUpdate = document.getElementById('formUpdate');
    const formDelete = document.getElementById('formDelete');


    //Etat par défaut
    formCreate.style.display = 'block';
    formCreate.style.visibility = 'visible';

    formUpdate.style.display = 'none';
    formUpdate.style.visibility = 'hidden';

    formDelete.style.display = 'none';
    formDelete.style.visibility = 'hidden';


    //Bouton affichant le mode Create
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

    //Bouton affichant le mode update
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

    //Bouton affichant le mode delete
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

