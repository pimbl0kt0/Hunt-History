$("#sidebar span, #locationsAnimation").mouseenter(() =>
{
    $("#locationsAnimation").css({width: $("#locations").outerWidth(), height: $("#locations").outerHeight()});
    $("#sidebar span").attr("class", "sidebarClicked");
}).mouseleave(() =>
{
    $("#locationsAnimation").css({width: 0, height: 0});
    $("#sidebar span").attr("class", "sidebarItems");
});