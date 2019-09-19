function voter_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").Value;
    Can_vote = (Age <= 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Nested_Function {
    document.getElementById("Counting").innerHTML = Count();
    function count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}