const openDialogButton = document.getElementById("open-dialog");
const closeDialogButton = document.getElementById("close-dialog");
const userDialog = document.getElementById("user-dialog");

openDialogButton.addEventListener("click", function () {
    userDialog.showModal();
});

closeDialogButton.addEventListener("click", function () {
    userDialog.close();
});


userDialog.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        userDialog.close();
    }
});