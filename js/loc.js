
(function(){
    function displayPosition(pos) {
     mylat = pos.coords.latitude;
     mylong = pos.coords.longitude;
     thediv = document.getElementById('locationinfo');
    thediv.innerHTML = '<p>Su longitud es :' +
        mylong + ' y su  latitud es ' + mylat + '</p>';

//Cargar Google Map
 latlng = new google.maps.LatLng(mylat, mylong);
     myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
   
/*var map = new google.maps.Map(document.getElementById
("map_canvas"), myOptions);
document.getElementById("map_canvas").innerHTML= myOptions;
//Agregar marcador
var marker = new google.maps.Marker({
         position: latlng, 
         map: map, 
         title:"Estas aqui"
     });*/
};

// Error callback function
function errorFunction(pos) {
    alert('Error!');
};
    (function initialize() {
      var marcadores = [
        ['William', 42.603, -5.577],
        ['Monica', 40.963, -5.669],
        ['Cedes', 9.8890589, -84.08543279999999]
      ];
      var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15,
        center: new google.maps.LatLng(mylat, mylong),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < marcadores.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(marcadores[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    })();
    google.maps.event.addDomListener(window, 'load', initialize);
    // body...
// ççDeterminar geolocalizacion
if (navigator.geolocation) {
    // Localizar posicion
    navigator.geolocation.getCurrentPosition(displayPosition, 
    errorFunction);
} else {
    alert('Parece que la Geolocalización, necesaria para esta página, no está habilitada en tu navegador. Utilice un navegador que lo admita.');
}

// Función de devolución de llamada de éxito

      }();
