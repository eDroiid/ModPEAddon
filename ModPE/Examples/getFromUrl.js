/**
* ModPEAddon Example:
* ModPE.getFromUrl
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/getFromUrl.js
*/
var myUrl = "https://raw.githubusercontent.com/eDroiid/ModPEAddon/master/HELLO";
var text = ModPE.getFromUrl(myUrl);
if(text != false){
	print("I got: " + text);
}
	