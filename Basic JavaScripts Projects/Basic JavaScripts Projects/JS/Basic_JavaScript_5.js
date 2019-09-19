document.write(typeof 3);

function my_Function() {
 var res= "";
 res = res +isNaN(123);
 res = res +isNaN("Hello");
document.getElementId("demo").innerHTML = res; 
}

document.write(-3E320);
document.write(2E320);
document.write(3 > 10);
console.log(1 > 10);
document.write("10" + 5);
document.write(10 == 10);
document.write(10 == 3);

X=10;
Y=10;
document.write(X === Y);

Z= "Ten";
A =10;
document.write(A === Z);

B = "Nine";
C = 8;
document.write(B===C);

D= 7;
E=3;
document.write(D===E);

document.write(5 > 1 && 8 > 3);
document.write(5 < 1 && 8 < 3);
document.write(5 > 1 || 8 > 3);
document.write(5 < 1 || 8 < 3);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}

function is_Function() {
    document.getElementById("Is").innerHTML = !(5<10);
}
