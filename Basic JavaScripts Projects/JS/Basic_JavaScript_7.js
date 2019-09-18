
function myFunction () {
    if (new Date().getHours() < 10) {
    document.getElementById("Adding").innerHTML = "It is early yet";
    }
}

function myFunction_1() {
 var x = ((Math.random() * 10) + 1);
 if (x > 5 ) {
     alert("large");
 } if(x < 5) {
     alert("small");
 }
}

function myFunction_2() {
    var x = document.getElementById("Y").value;
    document.getElementById("number1").innerHTML = x;
    if (x > 5) {
        alert("wow");
    } else {
        alert("nope");
    }
}