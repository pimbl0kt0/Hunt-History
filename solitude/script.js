resetLayout();

window.addEventListener('resize', (e) =>
{
    resetLayout();
});

function resetLayout()
{
    $("#positioner").css({width: $("body").width()-$("#sidebar").width(), 'margin-left': $("#sidebar").width()});
}

function clickLocations()
{
    $("#locations").css("visibility", "visible");
    $("#locations").css("height", "auto");
    $("#locations").css("width", "auto");
    resetLayout();
}

function initMap() {
    var solitude = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: solitude});
    var marker = new google.maps.Marker({position: solitude, map: map});
}