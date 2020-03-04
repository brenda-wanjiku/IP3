$(document).ready(function () {
    $("#submit").click(function () {
       
        let name = $("#inputName").val();
        let email =$("#inputEmail").val();
        if (name && email !== null){
          alert ("Hello " + name + " We have received your feedback")
        }else {
            return alert ("You must fill in your data")
        }
                
        });


    $(".designBlock").click(function () {
        $("#design").toggle();
        $(".clickable").toggle();

    });

    $(".developmentBlock").click(function () {
        $("#development").toggle();
        $(".click").toggle();
    });

    $(".productBlock").click(function () {
        $("#product").toggle();
        $(".clicka").toggle();

    });
    
    $('.col-md-3').mouseover(function () {
        $(this).css({ 'opacity': '.6', 'color': 'black', 'display': 'block', 'justifyContent: ': 'center' });
        $(this).children('span.text').show();
    }).mouseout(function () {
        $(this).css({ 'opacity': '1' });
        $(this).children('span.text').hide();
    });
});
