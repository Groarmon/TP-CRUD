function dontExist() {
    swal.fire({
        title: "L'ID saisi n'existe pas.",
        icon: "info"
    })
}
function exist() {
    swal.fire({
        title: "L'ID existe déjà.",
        icon: "info"
    })
}
function suppressionAnnule() {
    swal.fire({
        title: "Suppression annulé",
        icon: "info"
    })
}

function confirmationCreation(data) {
    swal.fire({
        title: "Vous venez de créer l'ID " + data,
        icon: "info"
    })
}

