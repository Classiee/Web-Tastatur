document.addEventListener("keydown", function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        document.getElementById("divA").innerHTML += event.key;
    }
});
                          

function pushedLetter(event) {
    let letter = event.target.innerHTML;
    document.getElementById("divA").innerHTML += letter;
}
