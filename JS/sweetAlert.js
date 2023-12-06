/**
 * Affiche une alerte "L'ID saisi n'existe pas."
 */
function dontExist() {
    swal.fire({
        title: "L'ID saisi n'existe pas.",
        icon: "info"
    })
}

/**
 * Affiche une alerte "L'ID existe déjà."
 */
function exist() {
    swal.fire({
        title: "L'ID existe déjà.",
        icon: "info"
    })
}

/**
 * Affiche une alerte "Vous venez de modifier l'ID"
 * @param {number} data - Un ID saisi
 */
function confirmationModification(data) {
    swal.fire({
        title: "Vous venez de modifier l'ID " + data,
        icon: "success"
    })
}

/**
 * Affiche une alerte "Suppression annulé"
 */
function suppressionAnnule() {
    swal.fire({
        title: "Suppression annulé",
        icon: "info"
    })
}

/**
 * Affiche une alerte "Vous venez de créer l'ID"
 * @param {number} data - Un ID saisi
 */
function confirmationCreation(data) {
    swal.fire({
        title: "Vous venez de créer l'ID " + data,
        icon: "info"
    })
}

