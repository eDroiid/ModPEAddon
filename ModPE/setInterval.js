/**
* ModPEAddon:
* ModPE.setInterval
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/hud.js
*/
ModPE.setInterval = function(context, action, interval){
  function intervalTask(){
    context.runOnUiThread(
      new java.lang.Runnable({
        run: function(){
          new android.os.Handler().postDelayed(
            new java.lang.Runnable({
              run: function() {
                action();
                eval(intervalTask())
              }
            }), interval
          );
        }
      })
    );
  }
  intervalTask();
};
