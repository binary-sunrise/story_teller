var markerMRK;
var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}
function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}
var story = document.getElementById('story');
var features = document.createElement('div');

features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}
if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}
config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    // style: config.style,
    style: config.chapters[0].mapStyle,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

const locations_chap2 = [[30.8025, 26.8206],[12.71170, 42.59043],[31.31918, 49.42826],[14.68462, 46.19596],[16.68172, 45.70033],[35.89532, 33.94228],[20.78992, 44.28234]];
const locations_chap3 = [[30.8025, 26.8206],[-2.40781, 54.28369]];
const locations_chap4 = [[30.8025, 26.8206],[14.68462, 46.19596],[16.68172, 45.70033],[20.78992, 44.28234],[31.31918, 49.42826]];
const locations_chap5 = [[30.8025, 26.8206],[2.58732, 47.86410]];
const locations_chap6 = [[2.58732, 47.86410],[-6.02968, 32.36859],[-14.82728, 15.21087],[-11.01601, 10.79173],[-5.38335, 7.86848],[1.02362, 8.75170],[12.22228, 4.83811]];
const locations_chap7 = [[30.8025, 26.8206],[36.2384, 30.5852],[54.27210, 23.87164]];
const locations_chap8 = [];

//chat

// add markers to map
function addMarkersToMap(locations) {
  for (const loc of locations) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(loc).addTo(map);
  }
}

function removeMarkersFromMap() {
  // Assuming you have a reference to the map instance
  // (e.g., you declared it globally or passed it as a parameter)

  // Remove all markers with the 'marker' class from the map
  document.querySelectorAll('.marker').forEach(markerElement => {
    markerElement.remove();
  });
}

// Create a inset map if enabled in config.js
if (config.inset) {
 var insetMap = new mapboxgl.Map({
    container: 'mapInset', // container id
    style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
    center: config.chapters[0].location.center,
    // Hardcode above center value if you want insetMap to be static.
    zoom: 3, // starting zoom
    hash: false,
    interactive: false,
    attributionControl: false,
    //Future: Once official mapbox-gl-js has globe view enabled,
    //insetmap can be a globe with the following parameter.
    //projection: 'globe'
  });
}

// instantiate the scrollama
var scroller = scrollama();
const arcColor = '#FFE59A';

// Playground
const EG = [30.8025, 26.8206];
const JD = [36.2384, 30.5852];
const IT = [12.71170, 42.59043];
const UKR = [31.31918, 49.42826];
const SLO = [14.68462, 46.19596];
const SBR = [20.78992, 44.28234];
const LBN = [35.89532, 33.94228];
const CRO = [16.68172, 45.70033];
const UK  = [-2.40781, 54.28369];
const FRC = [2.58732, 47.86410];
const MRC = [-6.02968, 32.36859];
const SNG = [-14.82728, 15.21087];
const GN = [-11.01601, 10.79173];
const IVR =[-5.38335, 7.86848];
const TG = [1.02362, 8.75170];
const CMR = [12.22228, 4.83811];
const UAE = [54.27210, 23.87164];

// chat1



// Function to create an image element
function createImageElement(src) {
  var img = document.createElement('img');
  img.src = src;
  img.width = 15; // Set the desired width
  img.height = 15; // Set the desired height

  return img;
}


// Function to create SVG element
function createSVGElement(svgString) {
  var svg = new Blob([svgString], { type: 'image/svg+xml' });
  var URL = window.URL || window.webkitURL;
  var blobURL = URL.createObjectURL(svg);
  var img = document.createElement('img');
  img.src = blobURL;
  return img;
}

// Turf.js for Bezier Splines
var EGtoIT = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + IT[0]) / 2, (IT[1] + EG[1] + 15) / 2], IT]
  },
  'lineMetrics': true
});

var EGtoUKR = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + UKR[0]) / 2, (UKR[1] + EG[1] + 15) / 2], UKR]
  },
  'lineMetrics': true
});

var EGtoSLO = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + SLO[0]) / 2, (SLO[1] + EG[1] + 10) / 2], SLO]
  },
  'lineMetrics': true
});

var EGtoSBR = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + SBR[0]) / 2, (SBR[1] + EG[1] + 10) / 2], SBR]
  },
  'lineMetrics': true
});

var EGtoLBN = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + LBN[0]) / 2, (LBN[1] + EG[1] + 2) / 2], LBN]
  },
  'lineMetrics': true
});

var EGtoCRO = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + CRO[0]) / 2, (CRO[1] + EG[1] + 10) / 2], CRO]
  },
  'lineMetrics': true
});

var EGtoJD = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + JD[0]) / 2, (JD[1] + EG[1] + 2) / 2], JD]
  },
  'lineMetrics': true
});

var EGtoUK = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + UK[0]) / 2, (UK[1] + EG[1] + 20) / 2], UK]
  },
  'lineMetrics': true
});

var EGtoFRC = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + FRC[0]) / 2, (FRC[1] + EG[1] + 20) / 2], FRC]
  },
  'lineMetrics': true
});

var FRCtoMRC = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [FRC, [(FRC[0] + MRC[0]) / 2, (MRC[1] + FRC[1] + 8) / 2], MRC]
  },
  'lineMetrics': true
});

var FRCtoSNG = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [FRC, [(FRC[0] + SNG[0]) / 2, (SNG[1] + FRC[1] + 12) / 2], SNG]
  },
  'lineMetrics': true
});

var FRCtoGN = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [FRC, [(FRC[0] + GN[0]) / 2, (GN[1] + FRC[1] + 12) / 2], GN]
  },
  'lineMetrics': true
});

var FRCtoIVR = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [FRC, [(FRC[0] + IVR[0]) / 2, (IVR[1] + FRC[1] + 12) / 2], IVR]
  },
  'lineMetrics': true
});

var FRCtoTG = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [FRC, [(FRC[0] + TG[0]) / 2, (TG[1] + FRC[1] + 12) / 2], TG]
  },
  'lineMetrics': true
});

var FRCtoCMR = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [FRC, [(FRC[0] + CMR[0]) / 2, (CMR[1] + FRC[1] + 15) / 2], CMR]
  },
  'lineMetrics': true
});

var EGtoUAE = turf.bezierSpline({
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [EG, [(EG[0] + UAE[0]) / 2, (UAE[1] + EG[1] + 7) / 2], UAE]
  },
  'lineMetrics': true
});

// var resultGeoJSON = turf.feature(EGtoJD.geometry);

// console.log("resultGeoJSON"=resultGeoJSON);




function addLineLayer(map, sourceId, geojsonData) {
  map.addSource(sourceId, {
    'type': 'geojson',
    'data': geojsonData,
    'lineMetrics': true
  });

  map.addLayer({
    'id': sourceId,
    'source': sourceId,
    'type': 'line',
    'paint': {
      'line-width': 3,
      'line-gradient': [
        'interpolate',
        ['linear'],
        ['line-progress'],
        0, arcColor
      ],
      // 'line-extrusion': 30,
    },
    'layout': {
      'line-join': 'round',
      'line-cap': 'round',
      'line-round-limit': 1,
    },
  });
}

// // Function to add line layers based on the current chapter
// function addLinesForChapter(chapter) {
//   if (chapter && chapter.id) {
//       // Remove existing markers and lines
//       removeMarkersFromMap();
//       removeAllLines(map);

//       // Add new markers and lines based on the chapter
//       if (chapter.id === 'chapter-2') {
//           addMarkersToMap(locations_chap2);
//           addLineLayer(map, 'EgtoIT', EGtoIT);
//           addLineLayer(map, 'EGtoUKR', EGtoUKR);
//           addLineLayer(map, 'EGtoSLO', EGtoSLO);
//           addLineLayer(map, 'EGtoSBR', EGtoSBR);
//           addLineLayer(map, 'EGtoLBN', EGtoLBN);
//           addLineLayer(map, 'EGtoCRO', EGtoCRO);
//       } else if (chapter.id === 'chapter-3') {
//           addMarkersToMap(locations_chap3);
//           addLineLayer(map, 'EGtoUK', EGtoUK);
//       } else if (chapter.id === 'chapter-4' || chapter.id === 'chapter-4a') {
//           addMarkersToMap(locations_chap4);
//           addLineLayer(map, 'EGtoUKR', EGtoUKR);
//           addLineLayer(map, 'EGtoSLO', EGtoSLO);
//           addLineLayer(map, 'EGtoSBR', EGtoSBR);
//           addLineLayer(map, 'EGtoCRO', EGtoCRO);
//       } else if (chapter.id === 'chapter-5') {
//           addMarkersToMap(locations_chap5);
//           addLineLayer(map, 'EGtoFRC', EGtoFRC);
//       } else if (chapter.id === 'chapter-6') {
//           addMarkersToMap(locations_chap6);
//           addLineLayer(map, 'FRCtoMRC', FRCtoMRC);
//           addLineLayer(map, 'FRCtoSNG', FRCtoSNG);
//           addLineLayer(map, 'FRCtoGN', FRCtoGN);
//           addLineLayer(map, 'FRCtoIVR', FRCtoIVR);
//           addLineLayer(map, 'FRCtoTG', FRCtoTG);
//           addLineLayer(map, 'FRCtoCMR', FRCtoCMR);
//       } else if (chapter.id === 'chapter-7') {
//           addMarkersToMap(locations_chap7);
//           addLineLayer(map, 'EGtoJD', EGtoJD);
//           addLineLayer(map, 'EGtoUAE', EGtoUAE);
//       }
//       // Add more conditions for other chapters as needed
//   }
// }
function removeAllLines(map) {
  // Iterate over all the layers in the map
  map.getStyle().layers.forEach(layer => {
    // Check if the layer type is 'line' and if it has a source
    if (layer.type === 'line' && map.getSource(layer.source)) {
      // Remove the layer
      map.removeLayer(layer.id);

      // Remove the source
      map.removeSource(layer.source);
    }
  });
}

// Function to set the map style based on the current chapter
function setMapStyleForChapter(chapter) {
  if (chapter && chapter.mapStyle) {
      map.setStyle(chapter.mapStyle);
  }
}


      
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
    map.on('move', getInsetBounds);
    }


// Keep track of the created circle
let locationCircle;
let locationCircleMarker;

// setup the instance, pass callback functions
scroller
    .setup({
        step: '.step',
        offset: 1,
        progress: true
    })
    //chat
    .onStepEnter(async response => {
        var current_chapter = config.chapters.findIndex(chap => chap.id === response.element.id);
        var chapter = config.chapters[current_chapter];
        console.log(chapter.id);
        if(chapter && chapter.id && chapter.id === 'chapter-0')
        {
          console.log(chapter.id);
          // setMapStyleForChapter(chapter);
          // removeMarkersFromMap();
          // removeAllLines(map);
          // setMapStyleForChapter(chapter);
        }else if(chapter && chapter.id && chapter.id === 'chapter-1')
        {
          console.log(chapter.id);
          // setMapStyleForChapter(chapter);
          // removeMarkersFromMap();
          // removeAllLines(map);
          // setMapStyleForChapter(chapter);
        }else if (chapter && chapter.id && chapter.id === 'chapter-1a')
        {
          // setMapStyleForChapter(chapter);
          // removeMarkersFromMap();
          // removeAllLines(map);
          // setMapStyleForChapter(chapter);
        }else if (chapter && chapter.id && chapter.id === 'chapter-1b')
        {
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);
          // setMapStyleForChapter(chapter);
        }else if(chapter && chapter.id && chapter.id === 'chapter-2'){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);          
          addMarkersToMap(locations_chap2);
          addLineLayer(map, 'EgtoIT', EGtoIT);
          addLineLayer(map, 'EGtoUKR', EGtoUKR);
          addLineLayer(map, 'EGtoSLO', EGtoSLO);
          addLineLayer(map, 'EGtoSBR', EGtoSBR);
          addLineLayer(map, 'EGtoLBN', EGtoLBN);
          addLineLayer(map, 'EGtoCRO', EGtoCRO);
          // setMapStyleForChapter(chapter);


        }else if(chapter && chapter.id && chapter.id === 'chapter-3'){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);
          addMarkersToMap(locations_chap3);
          addLineLayer(map, 'EGtoUK', EGtoUK);
          // setMapStyleForChapter(chapter);
        }else if(chapter && chapter.id && chapter.id === 'chapter-3a'){
          // setMapStyleForChapter(chapter);
          // removeMarkersFromMap();
          // removeAllLines(map);
          // addMarkersToMap(locations_chap3);
          // addLineLayer(map, 'EGtoUK', EGtoUK);
        }else if(chapter && chapter.id && chapter.id === 'chapter-3b'){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);
          addMarkersToMap(locations_chap3);
          addLineLayer(map, 'EGtoUK', EGtoUK);
          // setMapStyleForChapter(chapter);
        }else if(chapter && chapter.id && chapter.id === 'chapter-4' ){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);
          addMarkersToMap(locations_chap4);
          addLineLayer(map, 'EGtoUKR', EGtoUKR);
          addLineLayer(map, 'EGtoSLO', EGtoSLO);
          addLineLayer(map, 'EGtoSBR', EGtoSBR);
          addLineLayer(map, 'EGtoCRO', EGtoCRO);
          // setMapStyleForChapter(chapter);

        }else if(chapter && chapter.id && chapter.id === 'chapter-4a' ){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);
          addMarkersToMap(locations_chap4);
          addLineLayer(map, 'EGtoUKR', EGtoUKR);
          addLineLayer(map, 'EGtoSLO', EGtoSLO);
          addLineLayer(map, 'EGtoSBR', EGtoSBR);
          addLineLayer(map, 'EGtoCRO', EGtoCRO);
          // setMapStyleForChapter(chapter);

        }else if(chapter && chapter.id && chapter.id === 'chapter-5'){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map); 
          addMarkersToMap(locations_chap5);
          addLineLayer(map, 'EGtoFRC', EGtoFRC);
          // setMapStyleForChapter(chapter);


        }else if(chapter && chapter.id && chapter.id === 'chapter-6'){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);
          addMarkersToMap(locations_chap6);
          addLineLayer(map, 'FRCtoMRC', FRCtoMRC);
          addLineLayer(map, 'FRCtoSNG', FRCtoSNG);
          addLineLayer(map, 'FRCtoGN', FRCtoGN);
          addLineLayer(map, 'FRCtoIVR', FRCtoIVR);
          addLineLayer(map, 'FRCtoTG', FRCtoTG);
          addLineLayer(map, 'FRCtoCMR', FRCtoCMR);
          // setMapStyleForChapter(chapter);



        }else if(chapter && chapter.id && chapter.id === 'chapter-7'){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);
          addMarkersToMap(locations_chap7);
          addLineLayer(map, 'EGtoJD', EGtoJD);
          addLineLayer(map, 'EGtoUAE', EGtoUAE);
          // setMapStyleForChapter(chapter);

        }else if(chapter && chapter.id && chapter.id === 'chapter-8'){
          removeMarkersFromMap();
          removeAllLines(map);
          setMapStyleForChapter(chapter);

        }else if(chapter && chapter.id && chapter.id === 'chapter-8a'){
          // setMapStyleForChapter(chapter);
          removeMarkersFromMap();
          removeAllLines(map);  
        }
        
        // addLinesForChapter(chapter);
        // setMapStyleForChapter(chapter);

        else{
            return false
        }

        //chat1
        response.element.classList.add('active');
        map[chapter.mapAnimation || 'flyTo'](chapter.location);

        // Incase you do not want to have a dynamic inset map,
        // rather want to keep it a static view but still change the
        // bbox as main map move: comment out the below if section.
        // if (config.inset) {
        //     if (chapter.location.zoom < 5) {
        //         insetMap.flyTo({ center: chapter.location.center, zoom: 0 });
        //     } else {
        //         insetMap.flyTo({ center: chapter.location.center, zoom: 3 });
        //     }
        // }
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter && chapter.onChapterEnter && Array.isArray(chapter.onChapterEnter) && chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', () => {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 45, {
                    duration: 50000, easing: function (t) {
                        return t;
                    }

                });
            });
        }


        // Create and store the circle
        // locationCircle = createLocationCircle(chapter.data.circles);
        // addLineLayer(map, 'EgtoIT', chapter.data.lines);

        if (config.auto) {
            var next_chapter = (current_chapter + 1) % config.chapters.length;
            map.once('moveend', () => {
                document.querySelectorAll('[data-scrollama-index="' + next_chapter.toString() + '"]')[0].scrollIntoView();
            });
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        // removeMarkersFromMap();
        // removeAllLines(map);
        // Ensure the map style is set when exiting a chapter
        // setMapStyleForChapter(chapter);

        if (chapter && chapter.onChapterExit && Array.isArray(chapter.onChapterExit) && chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });

    if (config.auto) {
    document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
}

// });

//Helper functions for insetmap
function getInsetBounds() {
            let bounds = map.getBounds();

            let boundsJson = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    bounds._sw.lng,
                                    bounds._sw.lat
                                ],
                                [
                                    bounds._ne.lng,
                                    bounds._sw.lat
                                ],
                                [
                                    bounds._ne.lng,
                                    bounds._ne.lat
                                ],
                                [
                                    bounds._sw.lng,
                                    bounds._ne.lat
                                ],
                                [
                                    bounds._sw.lng,
                                    bounds._sw.lat
                                ]
                            ]
                        ]
                    }
                }]
            }

            if (initLoad) {
                addInsetLayer(boundsJson);
                initLoad = false;
            } else {
                updateInsetLayer(boundsJson);
            }

        }

function addInsetLayer(bounds) {
    insetMap.addSource('boundsSource', {
        'type': 'geojson',
        'data': bounds
    });

    insetMap.addLayer({
        'id': 'boundsLayer',
        'type': 'fill',
        'source': 'boundsSource', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#fff', // blue color fill
            'fill-opacity': 0.2
        }
    });
    // // Add a black outline around the polygon.
    insetMap.addLayer({
        'id': 'outlineLayer',
        'type': 'line',
        'source': 'boundsSource',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 1
        }
    });
}

function updateInsetLayer(bounds) {
    insetMap.getSource('boundsSource').setData(bounds);
}

// Get references to the buttons
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Add event listeners to the buttons
prevButton.addEventListener('click', scrollToPreviousStep);
nextButton.addEventListener('click', scrollToNextStep);

function scrollToPreviousStep() {
    const currentStep = getCurrentStep();
    if (currentStep > 0) {
        scrollToStep(currentStep - 1);
    }
}

function scrollToNextStep() {
    const currentStep = getCurrentStep();
    const totalSteps = getTotalSteps();
    if (currentStep < totalSteps - 1) {
        scrollToStep(currentStep + 1);
    }
}

function getCurrentStep() {
    const activeChapter = document.querySelector('.step.active');
    return Array.from(activeChapter.parentNode.children).indexOf(activeChapter);
}

function getTotalSteps() {
    const activeChapter = document.querySelector('.step.active');
    return activeChapter.parentNode.children.length;
}

function scrollToStep(stepIndex) {
  const activeChapter = document.querySelector('.step.active');
  const steps = Array.from(activeChapter.parentNode.children);
  
  // Calculate the offset
  const offset = steps[stepIndex].offsetTop + 85;

  // Scroll to the calculated offset
  window.scrollTo({
      top: offset,
      behavior: 'smooth'
  });
}





// setup resize event
window.addEventListener('resize', scroller.resize);



