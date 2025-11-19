<template>
  <div id="mapView" >
    welcome to mapView
  </div>
</template>

<script>
import L from "leaflet"
import {marker}  from "leaflet"
export default {
  mounted(){

    const map = L.map('mapView').setView([5.600609, -0.194249,], 13)
    console.log(map)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 L.marker([5.600609, -0.194249,]).addTo(map);
 console.log(marker)
 L.circle([5.597406, -0.195193,], {
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
