$(document).ready(function() {
    $(".card").hide();
    $(".card-section").hide();
    $("#desc").hide();
    $("#text-section").hide();

    $("#title").hover(function() {  

        $("#desc").fadeIn(200);
        $("#text-section").fadeIn(500);
        $(".card-section").fadeIn(500);
        $(".card").fadeIn(500);

        var newTopTitle = $(this).height() - 450;

        $(this).animate({
            marginTop: newTopTitle + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });

    });

    $("#title").click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".card-section").offset().top
          }, {
            duration: 200,
            easing: "linear"
          });
    });
});
  