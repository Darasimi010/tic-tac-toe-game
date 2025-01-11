function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputELement.textContent = "";
    let enteredValue = document.getElementById("playername");
    enteredValue.value = "";
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get("username").trim(); //"     " => ""

    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add("error");
        errorsOutputELement.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;
    /* OR
    if (editedPlayer === 1) {
        players[0].name = enteredPlayername;
    } else {
        players[1].name = enteredPlayername;
    }
    */

    closePlayerConfig();
}