// Write your JS here
import test from './script2.js';

console.log('test');

test();

var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot){

    const databaseValues = snapshot.val();
    console.log(databaseValues);
    console.log(databaseValues["Facts"][0]["Fact"]);
    //for(var i=0; i<databaseValues["Facts"].length;i++){
    for(var key in databaseValues["Facts"]){

        console.log("hi");
        //$("#info").append(databaseValues["Facts"][i]["Fact"]);
        $("#info").append("<div class='post'> <div class='user'> " + databaseValues["Facts"][key]["Name"] + " </div> <div class='content'> " + databaseValues["Facts"][key]["Fact"] + " <div> </div>")
    }
    
    

});

$( "#submit" ).click(function() {
    var input = $("#input").val();
    var name = $("#name").val();
    var period = $("#period").val();
    var email = $("#email1").val();

    var database = firebase.database();
    var databaseRef = database.ref('/');
    var FactsRef = database.ref('/Facts');
    var UsersRef = database.ref('/Users');
    databaseRef.once('value').then(function(snapshot){
        const databaseValues = snapshot.val();
        if( input != "" && name != "" && period != "" && email != ""){

            FactsRef.push({
                "Fact": input,
                "Time Period": period,
                "E-mail": email,
                "Name": name,
            });
        } else {
            $("#box").append("Please fill all fields");
 
        }
    })

    $("#info").append("<div class='post'> <div class='user'> "+ name +" </div> <div class='content'>  "+input+" </div> </div>");

  });