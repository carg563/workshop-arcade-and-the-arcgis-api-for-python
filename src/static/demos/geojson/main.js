require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/GeoJSONLayer'
], function(Map, MapView, GeoJSONLayer) {
  var bikesLayer = new GeoJSONLayer({
    url:
      'https://cdn.jsdelivr.net/gh/Esri/geojson-layer-js@master/data/dc-bike-lanes.json'
  });

  var mcdLayer = new GeoJSONLayer({
    url:
      'https://cdn.jsdelivr.net/gh/gavinr/usa-mcdonalds-locations/mcdonalds.geojson',
    visible: false
  });

  bikesLayer.watch('loadStatus', function(status) {
    if (status === 'failed') {
      alert('Error. Please check the URL.');
    }
  });

  bikesLayer.when(function() {
    bikesLayer.popupTemplate = bikesLayer.createPopupTemplate();
  });

  var map = new Map({
    basemap: 'dark-gray',
    layers: [bikesLayer, mcdLayer]
  });

  var view = new MapView({
    container: 'viewDiv',
    map: map,
    center: [-77.01318681783363, 38.90415014037292],
    zoom: 13
  });

  var mcdButton = document.getElementById('mcdButton');
  var bikesButton = document.getElementById('bikesButton');

  mcdButton.onclick = function(e) {
    bikesLayer.visible = false;
    mcdLayer.visible = true;
    view.extent = mcdLayer.fullExtent;
  };

  bikesButton.onclick = function(e) {
    bikesLayer.visible = true;
    mcdLayer.visible = false;
    view.extent = bikesLayer.fullExtent;
  };

  view.ui.add(mcdButton, 'top-right');
  view.ui.add(bikesButton, 'top-right');
});
