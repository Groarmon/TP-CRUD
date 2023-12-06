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

function confirmationModification(data) {
    swal.fire({
        title: "Vous venez de modifier l'ID " + data,
        icon: "success"
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

