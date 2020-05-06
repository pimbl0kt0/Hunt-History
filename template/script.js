setLayout();

$(window).resize(() =>
{
    setLayout();
});

function setLayout()
{
    $("#positioner").css({width: $("body").width()-$("#sidebar").width(), 'margin-left': $("#sidebar").width()});
}

function clickLocations()
{
    var steps = 10;
    var animater = $("#locationsAnimation");
    var widthStep = $("#locations").outerWidth()/steps;
    var heightStep = $("#locations").outerHeight()/steps;

    var counter = 0;
    var func = setInterval(()=>{
        if(counter == steps) {
            clearInterval(func);
        } else {
            animater.css({width: animater.outerWidth()+widthStep, height: animater.outerHeight()+heightStep});
        }
        counter++;
    }, 10);
    setLayout();

    $("")
}

function initMap() {
    var solitude = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map($("#map").get(0), {zoom: 4, center: solitude});
    var marker = new google.maps.Marker({position: solitude, map: map});
}