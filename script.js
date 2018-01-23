function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}

function loadDoc() {
var d = new Date();
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(xhttp.responseText);
        
        
        var preciobtc; var oldpreciobtc;
        preciobtc = objeto.bpi.USD.rate_float;
        if (oldpreciobtc!=preciobtc){
            oldpreciobtc=preciobtc;
            random_bg_color();
        }
        console.log(preciobtc + " : " + objeto.time.updated)
        document.getElementById("window").innerHTML = preciobtc.toFixed(2) +"$";
    }
  };
  xhttp.open("GET", 'https://api.coindesk.com/v1/bpi/currentprice.json', true);
  xhttp.send();
}


setInterval(loadDoc, 1000);
