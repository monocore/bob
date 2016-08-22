var $activeImage;

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

    $(".grid-item").on("click", function (ev) {
        $activeImage = $(this);
        $("#painting").css({"background": "url(painting/" + $(this).children().attr("src") + ") no-repeat center", "background-size": "contain"});                
        $("#painting").toggle();
        /*$("#painting img").attr("src", "painting/" + $(this).attr("src")).load(function () {
            //Determine portrait or landscape
            height = $(window).height();   // returns height of browser viewport
            width = $(window).width();
            $("#painting").css({ "width": width, "height": height, "max-height": height });
            $("#painting .container").css({ "width": width, "height": height });
            var marginLeft = ($("#painting .container").width() - $("#painting img").width()) / 2;
            var marginTop = ($("#painting .container").height() - $("#painting img").height()) / 2;
            $("#painting img").css({ "margin-left": marginLeft, "margin-top": marginTop });
        });*/
    });

    $("#about").on("click", function () {
        $("#about").toggle();
    });

    $("#painting").on("click", function () {
        $("#painting").toggle();
    });
    goHome();    


    //swipes
    var hammertime = new Hammer(document.getElementById("painting"));
    hammertime.on("swipe", function(ev){        
        if (ev.type == 'swipe'){
            if (ev.direction == 4) {
                var prevUrl = $activeImage.prev().children(0).attr("src");
                if (prevUrl) {
                    $("#painting").css({"background": "url(painting/" + prevUrl + ") no-repeat center", "background-size": "contain"});
                    $activeImage = $activeImage.prev();
                }
            };
            
            if (ev.direction == 2) {
                var nextUrl = $activeImage.next().children(0).attr("src");
                if (nextUrl) {
                    $("#painting").css({"background": "url(painting/" + nextUrl + ") no-repeat center", "background-size": "contain"});
                    $activeImage = $activeImage.next();
                }
            };
        }
    });

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