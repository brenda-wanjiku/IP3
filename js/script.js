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
    
    $("div.port-img").hover(function(){
        $(this).find("div.desc").css({"display":"flex"});
    },
    function(){
        $(this).find("div.desc").fadeOut();
    });

    $("#form").submit(function () {
        let name = document.getElementById("#inputName").value;
        let email = document.getElementById("#inputEmail").value;
        console.log(email, name)
        if (name === "" || email === "") {
            alert("Please fill in name and email correctly")
        }
        else{
                alert("Thank you " + name + " we have received your message")
                };
            });
        });
