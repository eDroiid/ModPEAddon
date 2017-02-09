/**
* ModPEAddon:
* ModPE.getFromUrl
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/getFromUrl.js
*/
ModPE.getFromUrl = function(url, errs = 0){
    try {
        var url = new java.net.URL(url);
        var connection = url.openConnection();
        var inputStream = connection.getInputStream();
        var data = "";
        var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var line = "";
        while((line = bufferedReader.readLine()) != null){
            data += line + "\n";
        }
        var result = data.toString();
        bufferedReader.close();
    } catch(err) {
        result = (errs ? "Getting URL Failed. Error: " + err : 0);
        print("Error ModPE.ajax(): " + err);
    } finally {
        if(result == null || result == undefined){
            result = (errs ? "Result is null" : 0);
        }
    }
    return result;
}