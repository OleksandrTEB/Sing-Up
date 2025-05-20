const clear = document.getElementById("submit");
let value_inputs = document.getElementsByClassName("inputs");

clear.addEventListener('click', function () {
    for (let i = 0; i < value_inputs.length; i++) {
        value_inputs[i].value = "";
    }
});
