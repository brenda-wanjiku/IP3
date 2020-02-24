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

    $("form #contactUs").submit(function (event) {
        let name = $("#inputName").val();
        let email = $("#inputEmail").val();
        let message = $("#textMessage").val();
        var inputDetails = ["inputName", "inputEmail", "textMessage"]

        if (name === "" || email === "" || message === "") {
            return alert("Enter details");
        }
        
        inputDetails.forEach(function (detail) {
                if (detail === "inputName") {
                    alert("Thank you " + name + " we have received your message")
                };
            });
    });
});