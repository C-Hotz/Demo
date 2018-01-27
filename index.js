// Carley 4 12/01/2000 true


//var wallet = 9;
//var firstname = "Carley";

//console.log(wallet);
/*if(wallet==12){
    alert("You Have 12 Dollars");
}else{
    alert("You Do Not Have 12 Dollars");
}
*/
var test = confirm("Is Your Name Carley?");
if(test==true){
    var name = "Carley";
    alert("Hello "+name);
}
if (test!=true){
    alert("Your Name Is "+name); 
}

var current = 3
for(var limit=100;current<=limit;current++){
    alert(current);
}