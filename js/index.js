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
    for(var i=0; i<databaseValues["Facts"].length;i++){
        console.log("hi");
        //$("#info").append(databaseValues["Facts"][i]["Fact"]);
        $("#info").append("<div class='post'> <div id='user'> " + databaseValues["Users"][i]["Name"] + " </div> <div id='content'> " + databaseValues["Facts"][i]["Fact"] + " <div> </div>")
    }
    
});