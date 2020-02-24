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
    /* $(".img1").hover(function () {
       $("#work1").fadeIn("slow")
   });
   $("#work1").fadeOut(3000)
  });*/

    $("form").submit(function (event) {
        let name = document.getElementById("inputName").value;
        let email = document.getElementById("inputEmail").value;

        if (name === "" || email === "") {
            alert("Please fill in name and email correctly")
        }
        else{
                alert("Thank you " + name + " we have received your message")
                };
                event.preventDefault();
            });
        });