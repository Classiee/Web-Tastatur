const keyboard = document.getElementById("keyboard");

function pushedLetter(button) {
    let letter = button.innerHTML;
    document.getElementById("divA").innerHTML += letter;
}