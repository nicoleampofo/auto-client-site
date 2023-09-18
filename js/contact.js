$(window).load(function() {
$('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    prevText: "&#xf104;",
    nextText: "&#xf105;"
});

// Remove preloader
// https://ihatetomatoes.net/create-custom-preloading-screen/
$('body').addClass('loaded');
});

/* Google map
------------------------------------------------*/
var map = '';
var center;

function initialize() {
    var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(13.758468,100.567481),
    scrollwheel: false
    };

    map = new google.maps.Map(document.getElementById('google-map'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}
$(document).ready(function(){
    loadGoogleMap();
});
