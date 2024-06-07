fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => console.log(data));


function initMap() {
    const centroMapa = { lat: -34.6083, lng: -58.3712 };

    const mapa = new google.maps.Map(document.getElementById('map-container'), {
        center: centroMapa,
        zoom: 7,
    });

    const marcador = new google.maps.Marker({
        position: centroMapa,
        map: mapa,
        title: 'Mi marcador'
    });
}

function cargarScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-h2BKXgWmyaI7VY6PsIopucFQpgUF2EU&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

cargarScript();