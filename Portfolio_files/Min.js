$(window).on("load", sidenErLoadet);



function sidenErLoadet() {
    console.log("klar");

    hovereffekt();
}

$("#Ating").mouseover(
    function hovereffekt() {
        $("#Ating").removeClass("aNoHover");
        $("#Ating").addClass("aHover");



    })


$("#Ating").mouseout(
    function hovereffekt() {
        $("#Ating").removeClass("aHover");
        $("#Ating").addClass("aNoHover");



    })
