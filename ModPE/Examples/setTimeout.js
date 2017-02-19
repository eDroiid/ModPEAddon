/**
* ModPEAddon Example:
* ModPE.setTimeout
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/setTimeout.js
*/
ModPE.setTimeout(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), function(){
  print("5 seconds later");
}, 5000);