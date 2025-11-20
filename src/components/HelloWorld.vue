<template>
  <div id="mapView" >
    welcome to mapView
  </div>
</template>

<script>
import L from "leaflet"
export default {
  mounted(){
    const  lat = 5.600609
    const longi = -0.194249
    const map = L.map('mapView').setView([lat, longi,], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 L.marker([lat, longi,]).addTo(map);
 L.circle([lat, longi,], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
    radius: 450
}).addTo(map);

  },

  data:() => ({
  longitude: 5.600609,

  latitude: -0.194249
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mapView{
  height: 600px;
}


</style>
