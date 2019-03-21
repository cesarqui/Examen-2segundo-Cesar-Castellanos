var cerIcon = L.icon({
    iconUrl: 'img/glass.png',
    
   
});


var map = L.map('map',{ minZoom:12}).setView([19.8454, -90.5237], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

oxxo = [
    {
       
        "name": "OXXO 3 PODERES, Santa Ana",   
        "lat": "19.8359038",
        "lng": "-90.5220144",
                 
    },
    {
        "name": "Oxxo Concordia Campeche",
        "lat": "19.8342089",
        "lng": "-90.5008639",
        
    },
    {

        "name": "Oxxo San Rafael",
        "lat": "19.8137996",
        "lng": "-90.5294478",
    },
    {
         
        "name": "OXXO Resurgimiento, Bosques de Campeche",
        "lat": "19.8318888",
        "lng": "-90.5586464",
        
    },
    {
              
        "name": "Oxxo Cooperativa Kalá",
        "lat": "19.8549731",
        "lng": "-90.4805955",
        
 
    },
    {
          
        "name": "oxxo Lerma",
        "lat": "19.8110012",
        "lng": "-90.5940725",
        
    }
]

console.log(oxxo.length)

for (var i = 0; i < oxxo.length; i++) {
    console.log(oxxo[i].name)
    L.marker([oxxo[i].lat, oxxo[i].lng], {icon: cerIcon}).addTo(map)
        .bindPopup(oxxo[i].name)
        .openPopup();
}
