Function myFirstFunction() {
    var str = "This is green text";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function myFunction () {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;
}