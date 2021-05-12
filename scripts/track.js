// This code will run every time the GPS gets a new position:
function updatePosition(pos) {
    try {
        // User has clicked pause button?
        if (window.paused) return;

        // Ignore if < 10s since last update: 
        var t = new Date().getTime();
        if (window.lastMoveTime && t - window.lastMoveTime < (window.Cypress ? 100 : 10000)) return;
        window.lastMoveTime = t;


        // nearest place and appropriate zoom:
        let nearest = window.map.nearestPlace({ e: pos.coords.longitude, n: pos.coords.latitude });

        if (nearest.distancesq < 0.002 && window.lastPlace != nearest.place) { // ~0.1mi
            window.lastPlace = nearest.place;
            window.index.hideIndex();
            goto(nearest.place.id);
            appInsights.trackEvent({ name: "trackPlace", properties: { place: nearest.place.id } });
        } else {
            // Shift map to current location:
            moveTo(pos.coords.longitude, pos.coords.latitude, nearest.zoom);
            appInsights.trackEvent({ name: "trackMove", properties: { project: window.project.id } });
        }
    } catch (e) {
        appInsights.trackEvent({ name: "trackException", properties: { msg: e.toString() } });
    }
}

window.lastPlace = null;

/**
 * Set the tracking pause button from cookie.
 */
function initTracking() {

    window.trackingEnable = !location.queryParameters.notrack && window.isMobile || window.Cypress;
    if (window.trackingEnable) g("pauseButton").style.display = "inline-block";

    if (getCookie("tracking") == "on" && window.trackingEnable) {
        onPauseButton();
    }
}

window.paused = true;

function onPauseButton(stop = false) {
    try {
        var b = g("pauseButton");
        if (window.paused && !stop) {
            window.lastPlace = null;
            b.style.backgroundColor = "lightgreen";
            b.innerHTML = "<small><b>||</b></small>";
            b.title = "Pause map tracking";
            window.paused = false;
            flashMessage(s("trackingResumed", "Tracking resumed"));
            setCookie("tracking", "on");
            startIncrementalUpdate();
            startLocationTracking();
            window.index.hideIndex();
        } else if (!window.paused) {
            b.style.backgroundColor = "white";
            b.innerHTML = "<b>&gt;</b>";
            b.title = "Move the map as you walk";
            window.paused = true;
            flashMessage(s("trackingSuspended", "Tracking location suspended"));
            setCookie("tracking", "off");

            stopIncrementalUpdate();
            stopLocationTracking();
        }
    } catch (e) {
        appInsights.trackEvent({ name: "trackButtonException", properties: { msg: e.toString() } });
    }
}

function startLocationTracking() {
    appInsights.trackEvent({ name: "startTracking", properties: { project: window.project.id } });
    navigator.geolocation.getCurrentPosition(updatePosition);
    window.navigatorWatch = navigator.geolocation.watchPosition(
        updatePosition,
        // Not much we can do if GPS returns an error, other than try again later:
        function (err) { },
        // Various options:
        {
            enableHighAccuracy: true,
            timeout: 9000,  // Stop trying after 9 seconds (e.g. if in a tunnel)
            maximumAge: 3000 // We accept location calculated anything up to 3 seconds ago
        }
    );
}

function stopLocationTracking() {
    appInsights.trackEvent({ name: "stopTracking", properties: { project: window.project.id } });
    navigator.geolocation.clearWatch(window.navigatorWatch);
}
