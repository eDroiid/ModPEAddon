/**
* ModPEAddon Example:
* ModPE.JSON
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/JSON.js
*/
var raw_data = '{"player":{"online": false,"xyz":[128, 128, 128]}}';
var data = ModPE.JSON.parse(raw_data);

print("XYZ: " + data.player["xyz"].join(", ")); // XYZ: 128, 128, 128