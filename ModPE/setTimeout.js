/**
* ModPEAddon:
* ModPE.setTimeout
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/setTimeout.js
*/
ModPE.setTimeout = function(context, action, interval){
  context.runOnUiThread(
    new java.lang.Runnable({
      run: function(){
        new android.os.Handler().postDelayed(
          new java.lang.Runnable({
            run: function() {
              action();
            }
          }), interval
        );
      }
    })
  );
};