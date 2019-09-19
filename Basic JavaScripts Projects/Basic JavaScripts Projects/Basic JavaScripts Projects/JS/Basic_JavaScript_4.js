function my_Dictionary () {
    var Wife = {
        Previous_Parners:"Few",
        Loyalty:100,
        Kids:0,
        Psycho:"No",
    };
    delete Wife.Loyalty;
    document.getElementById("Dictionary").innerHTML = Wife.Previous_Parters;
}