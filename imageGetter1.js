var participant = null;
//participant = gapi.hangout.getLocalParticipant();
participant = "Hello World";
var para=document.createElement("p");
var node=document.createTextNode(participant.person.id);
para.appendChild(node);
var element=document.getElementById("div2");
element.appendChild(para);          
var canvas = document.getElementById("e");
var context = canvas.getContext("2d");
var cat = new Image();
cat.src = "http://hangoutmediastarter.appspot.com/static/mustache.png";
cat.onload = function() {
  context.drawImage(cat, 0, 0);
};