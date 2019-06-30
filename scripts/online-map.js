
// Called when the script for Bing maps has loaded and is ready to draw a map:
function mapModuleLoaded() {
    // Arbitrary place to centre the map before GPS location is acquired:
    window.here = new Microsoft.Maps.Location(52.008144, -5.067547);

    var centerFromCookie = getCookie("mapCenter");
    if (centerFromCookie) {
        window.here = Microsoft.Maps.Location.parseLatLong(centerFromCookie)
            || window.here;
    }

    // Load map:
    window.map = new Microsoft.Maps.Map(document.getElementById('theMap'),
        {
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            center: window.here,
            showLocateMeButton: false,
            //showMapTypeSelector: false,
            showZoomButtons: true,
            disableBirdseye: true,
            disableKeyboardInput: true,
            disableStreetside: true,
            enableClickableLogo: false,
            navigationBarMode: Microsoft.Maps.NavigationBarMode.compact,
            zoom: 17
        });

    setUpMapClick();
    setUpMapMenu();
    //setUpPlacePopup(window.map);

    /*
    // Minor convenience: If user selects OS map, zoom out so that actual OS shows:
    Microsoft.Maps.Events.addHandler(window.map, 'maptypechanged', function () {
        var mapTypeId = window.map.getMapTypeId();
        if (mapTypeId == Microsoft.Maps.MapTypeId.ordnanceSurvey && window.map.getZoom() > 17) {
            setTimeout(function () { window.map.setView({ zoom: 17 }) }, 300);
        }
    });
    */

    Microsoft.Maps.Events.addHandler(map, 'viewchangeend', setStreetOsLayer);

    loadPlaces();
    g("splash").style.display = "none";
}

/*
function setUpPlacePopup(map) {
    //Create an infobox to show start of place text on hover
    window.placePopup = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false,
        showCloseButton: false,
        offset: new Microsoft.Maps.Point(0, 10),
        description: "",
        maxWidth: 400,
        maxHeight: 200,
        showPointer: true
    });
    window.placePopup.setMap(map);

    Microsoft.Maps.Events.addHandler(window.placePopup, 'click', function (e) {
        var place = e.target.place;
        if (place) {
            go(place.id, false);
        }
    });
}
*/

function setUpMapMenu() {
    /*
    window.menuBox = new Microsoft.Maps.Infobox(
        window.map.getCenter(),
        {
            visible: false,
            showPointer: true,
            offset: new Microsoft.Maps.Point(0, 0),
            actions: [
                {
                    label: "Add place here  .",
                    eventHandler: function () {
                        var loc = window.menuBox.getLocation();
                        window.menuBox.setOptions({ visible: false });
                        // create point
                    }
                }
            ]
        });
    window.menuBox.setMap(window.map);
    */
    Microsoft.Maps.Events.addHandler(window.map, "rightclick",
        function (e) {
            mapAdd(makePlace(e.location.longitude, e.location.latitude));
        });
}

function setUpMapClick() {
    Microsoft.Maps.Events.addHandler(window.map, "click", function (e) {
        closePopup();
    });
}

function mapScreenToLonLat(x, y) {
    let vp = window.visualViewport;
    var loc = window.map.tryPixelToLocation(new Microsoft.Maps.Point(x-vp.width/2, y-vp.height/2));
    return {e: loc.longitude, n: loc.latitude};
}


function mapAdd(place) {
    if (!place) return null;
    var pushpin = null;
    try {
        pushpin = new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(place.loc.n, place.loc.e),
            {
                title: place.Title.replace(/&#39;/, "'").replace(/&quot;/, "\""),
                enableHoverStyle: true
            }
        );
        pushpin.place = place;
        updatePin(pushpin);
        window.map.entities.push(pushpin);
        Microsoft.Maps.Events.addHandler(pushpin, 'click', function (e) {
            if (e) { showPin(e.primitive, e); }
        });  
        Microsoft.Maps.Events.addHandler(pushpin, 'rightclick', function (e) {
            if (e) { showPin(e.primitive, e); }
        });
    } catch (xx) { }
    return pushpin;
}

// Set the title and colour according to the attached place
function updatePin(pin) {
    var options = pinOptions(pin.place);
    options.color = Microsoft.Maps.Color.fromHex(options.color);
    pin.setOptions(options);
    //pin.setLocation(newPlace.location);
}

function showPin(pin, e) {
    showPopup(pin, e.pageX, e.pageY);
}


// OS Landranger Map only goes up to zoom 17. Above that, display OS Standard.
function setStreetOsLayer() {
    if (window.map.getZoom() > 17 && window.map.getMapTypeId() == "os") {
        if (!window.streetOSLayer) {
            window.streetOSLayer = new Microsoft.Maps.TileLayer({
                mercator: new Microsoft.Maps.TileSource({
                    uriConstructor: 'https://api.maptiler.com/maps/uk-openzoomstack-outdoor/256/{zoom}/{x}/{y}.png?key=' + window.keys.Client_OS_K 
                })
            });
            map.layers.insert(window.streetOSLayer);
        }
        else window.streetOSLayer.setVisible(1);
    }
    else { if (window.streetOSLayer) window.streetOSLayer.setVisible(0); }
}


// User selected a map type - OS or aerial photo.
function mapChange(v) {
    if (!window.map) return;
    if (v == "os") {
        window.map.setView({ mapTypeId: Microsoft.Maps.MapTypeId.ordnanceSurvey });
    }
    else {
        window.map.setView({ mapTypeId: Microsoft.Maps.MapTypeId.aerial });
    }
    setStreetOsLayer();
}

// On initialization, get API keys

function setUpMap() {
    getKeys(function (data) {
            window.keys = data;
            doLoadMap();
        }
    );
}

function doLoadMap () {
       var head= document.getElementsByTagName('head')[0];
       var script= document.createElement('script');
       script.async = true;
       script.defer = true;
       script.type= 'text/javascript';
       script.src='https://www.bing.com/api/maps/mapcontrol?key='+window.keys.Client_Map_K+'&callback=mapModuleLoaded';
       head.appendChild(script);
}