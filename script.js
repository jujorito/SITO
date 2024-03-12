$(document).ready(function() {
    $(".card").hide();
    $(".card-section").hide();
    $("#desc").hide();
    $("#text-section").hide();

    setTimeout(() => {

        $("#desc").fadeIn(200);
        $("#text-section").fadeIn(500);
        $(".card-section").fadeIn(500);
        $(".card").fadeIn(500);
        $(".compass").fadeOut(3000);

        var newTopTitle = $("#title").height() - 450;

        $("#title").animate({
            marginTop: newTopTitle + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });

    }, 1000);

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
  