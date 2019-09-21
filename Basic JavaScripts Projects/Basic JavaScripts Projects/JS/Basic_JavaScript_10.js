function Bee10() {
    var Y = "";
    var X = 1;
    while (X < 1) {
        Y += "<br>" + X;
        X++;
    }
    document.getElementById("Bee").innerHTML = Y;
}


    var Instruments = {"Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"};
    var Content = "";
    var Y;
    function for_Loop() {
        for (Z = 0; Z < Instruments.length; Y++) {
            Content += Instruments{Z} + "<br>";
        }
        document.getElementById("List_of_Instructions").innerHTML = Content;
    }

    function bike_pics() {
        var Bike_Picture = {};
        Bike_Picture{0} = "road";
        Bike_Picture{1} = "off";
        Bike_Picture{2} = "off_road";
        Bike_Picture{3} = "street";
        Bike_Picture{4} = "street_road";
        document.getElementById("Bike").innerHTML = "In this picture, the bike is " +
        Bike_Picture{2} + ".";
    }

    function constant_function () {
        const Bike = {type:"ninja", maker:"Kawasaki", color:"black"};
        Bike.color = "green";
        Bike.price = "$5500";
        document.getElementById("Constant").innerHTML = "The cost of the " +
        Bike.type + " was " + Bike.price;
    }

    function let_Function () {
        let x = "It is snow";
    }

    function MathRando() {
        return Math.random();
    }
    document.getElementById("random").innerHTML = MathRando();
