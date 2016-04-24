$(document).ready(function() {
    var $grid = $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        //columnWidth: '.grid-item',
        gutter: 4,
        fitWidth: true
    });

    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });
    var width = document.width;
    $("container").css({ width: width, margin: "auto" });

    $(".grid-item img").on("click", function(ev) {
        //popup        
        if (this.parentElement.classList.contains("about")) {
            $("#about").toggle();
        } else {
            $("#painting").toggle();
            $("#painting img").attr("src", "painting/" + $(this).attr("src")).load(function() {
                //Determine portrait or landscape
                height = $(window).height();   // returns height of browser viewport
                width = $(window).width();
                $("#painting").css({ "width": width, "height": height, "max-height": height });
                $("#painting .container").css({ "width": width, "height": height});
                var marginLeft = ($("#painting .container").width() - $("#painting img").width()) / 2;
                var marginTop = ($("#painting .container").height() - $("#painting img").height()) / 2;
                $("#painting img").css({ "margin-left": marginLeft, "margin-top": marginTop });
            });
        }
    });
    
    $("#about").on("click", function(){
        $("#about").toggle();    
    });
    
    $("#painting").on("click", function() {
        $("#painting").toggle();
    })
});


