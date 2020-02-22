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
});