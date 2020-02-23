function myFunction() {
        }

    $(document).ready(function () {
        $(".designBlock").click(function () {
            $("#design").toggle()
            $(".clickable").toggle()

        });

        $(".developmentBlock").click(function () {
            $("#development").toggle()
            $(".clickable").toggle()

        });

        $(".productBlock").click(function () {
            $("#product").toggle()
            $(".clickable").toggle()

        });
        $(".img1").hover(function () {
            $("#work1").fadeIn("slow")
        });
        $("#work1").fadeOut(3000)
    });       

    /* $(".img1").click(function(){
     $(".img1").fadeIn ()
 });*/
/*$(function(){
    $(".img1").hover(function () {
        $(this).find("#work1").fadeIn();
});
});*/

/* $("#work1").hover (function() {
     $("#work1").fadeOut(0.5);
 });*/
