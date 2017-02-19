/**
* ModPEAddon Example:
* ModPE.setInterval
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/hud.js
*/
function newLevel(){
  ModPE.setInterval(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), function(){
    clientMessage("SPAMMM!");
  }, 500); // SPAMMM! every 1/2 second
}