/**
* ModPEAddon:
* ModPE.getMCPEContext
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/getMCPEContext.js
*/
ModPE.getMCPEContext = function(){
  return com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
}
