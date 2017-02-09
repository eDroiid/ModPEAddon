/**
* ModPEAddon:
* ModPE.hud
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/hud.js
*/
ModPE.hud = function(run, msg){
  msg = msg || "";
  function hudTask(){
    ctx.runOnUiThread(new java.lang.Runnable({
      run: function(){
        new android.os.Handler().postDelayed(new java.lang.Runnable({
          run: function() {
            if(run){
              ModPE.showTipMessage(msg)
            };
            eval(hudTask())
          }
        }), 1000 / 70);
      }
    }))
  }
  hudTask();
};
