function slice_Method() {
    var sentence = "Let's gets it started in here! ";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}

function string_Method() {
    var X =333;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 1453.625431;
    document.getElementById("Precision").innerHTML = X.toPrecision(3);
}