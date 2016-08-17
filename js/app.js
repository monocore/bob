$(document).ready(function () {        
    var $grid = $('.grid1').masonry({
        // options
        itemSelector: '.grid-item',
        //columnWidth: '.grid-item',
        gutter: 4,
        fitWidth: true
    });

    $grid.imagesLoaded().progress(function () {
        //$grid.masonry('layout');        
    });
    var width = document.width;
    $("container").css({ width: width, margin: "auto" });

    $(".grid-item img").on("click", function (ev) {
        $("#painting").toggle();
        $("#painting img").attr("src", "painting/" + $(this).attr("src")).load(function () {
            //Determine portrait or landscape
            height = $(window).height();   // returns height of browser viewport
            width = $(window).width();
            $("#painting").css({ "width": width, "height": height, "max-height": height });
            $("#painting .container").css({ "width": width, "height": height });
            var marginLeft = ($("#painting .container").width() - $("#painting img").width()) / 2;
            var marginTop = ($("#painting .container").height() - $("#painting img").height()) / 2;
            $("#painting img").css({ "margin-left": marginLeft, "margin-top": marginTop });
        });
    });

    $("#about").on("click", function () {
        $("#about").toggle();
    });

    $("#painting").on("click", function () {
        $("#painting").toggle();
    });
    goHome();    

});

function goHome() {
    $("#home").show();
    $("#werk").hide();
    $("#over").hide();
    $("#contact").hide();
    $(".menu a").removeClass("active");
    $("a.home").addClass("active");    
}
function goWerk() {
    $("#home").hide();
    $("#werk").show();
    $(".grid1").masonry('layout');
    $("#over").hide();
    $("#contact").hide();
    $(".menu a").removeClass("active");
    $("a.werk").addClass("active");
}
function goContact() {
    $("#home").hide();
    $("#werk").hide();
    $("#over").hide();
    $("#contact").show();
    $(".menu a").removeClass("active");
    $("a.contact").addClass("active");
}
function goOver() {
    $("#home").hide();
    $("#werk").hide();
    $("#over").show();
    $("#contact").hide();
    $(".menu a").removeClass("active");
    $("a.over").addClass("active");
}

