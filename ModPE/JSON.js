/**
* ModPEAddon
* @author eDroid
* @link http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/JSON.js
*/
ModPE.JSON = {
  parse: function(str){
    return Function("return " + str)();
  }
};
