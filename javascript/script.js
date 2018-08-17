"use strict";

function initMap() {
  let leicester = {lat: 52.6333, lng: -1.1333};
  let argos = {lat: 52.637406, lng: -1.132708};
  let arc = {lat: 52.613178, lng: -1.129757};
   
  
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 12,
    center: leicester
  });

  // these set different markers you want to show on your map
  let markerArgos = new google.maps.Marker({
    position: argos,
    map: map,
    title: 'Argos belgrave gate'
  });
  
  let markerArc = new google.maps.Marker({
    position: arc,
    map: map,
    title: 'Arc fabrics ltd'
  });
 }