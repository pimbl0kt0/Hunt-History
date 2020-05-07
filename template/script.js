$("#sidebar span, #locationsAnimation").mouseenter(() =>
{
    $("#locationsAnimation").css({width: $("#locations").outerWidth(), height: $("#locations").outerHeight()});
    $("#sidebar span").attr("class", "sidebarClicked");
}).mouseleave(() =>
{
    $("#locationsAnimation").css({width: 0, height: 0});
    $("#sidebar span").attr("class", "sidebarItems");
});

function initMap() {
    var solitude = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map($("#map").get(0), {zoom: 4, center: solitude});
    var marker = new google.maps.Marker({position: solitude, map: map});
}