
init();
function init() { 
      // When API is ready... 
  gapi.hangout.onApiReady.add( function(eventObj) {
    if (eventObj.isApiReady) { 
      imageGetter(); 
    }
  });
} 
function imageGetter(){
    var participant = null;
    participant = gapi.hangout.getLocalParticipant();
    var userID = null;
    userID = participant.person.id;
    var para=document.createElement("p");
    var node=document.createTextNode(userID);
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
    xmlParser("https://picasaweb.google.com/data/feed/api/user/"+userID+"&callback=?");
    function xmlParser(xmlURL)
        {  
          //var div_links = document.getElementById('links');

          var xmlDoc = loadXML(xmlURL);
          if (xmlDoc != null)
          {
            var para2=document.createElement("p");
            var node=document.createTextNode("GOT IT!");
            para2.appendChild(node);
            var element=document.getElementById("div2");
            element.appendChild(para);          
           }

          function loadXML(xmlArchive)
          {
           var xmlDoc;

           if (window.XMLHttpRequest)
             {
              xmlDoc = new window.XMLHttpRequest();
              xmlDoc.open("GET", xmlArchive, false);
              xmlDoc.send("");
              return xmlDoc.responseXML;
             }
           //IE 5 y IE 6
           else if (ActiveXObject("Microsoft.XMLDOM"))
             {
              xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
              xmlDoc.async = false;
              xmlDoc.load(xmlArchive);
              return xmlDoc;
             }
           alert("Error cargando el documento.");
           return null;
          }
      }
}
