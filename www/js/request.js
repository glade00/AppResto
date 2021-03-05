// definir url : le serveur auquel on adresse la requete
let url = '';
var xhr = createCORSRequest('GET', url);
if (!xhr) {
  alert('CORS not supported');
  return;
}
// Mise en place des callabacks pour la reponse de la requete
xhr.onload = function () {
  // en cas de succès. Le texte reçu du serveur se trouve dans this.responseText
  // en faire quelque chose
};
xhr.onerror = function () {
  // en cas d'echec de la requete
  alert('Woops, there was an error making the request.');
};
xhr.send();   // emission de la requete

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  return xhr;
}