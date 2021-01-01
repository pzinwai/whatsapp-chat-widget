$(document).ready(function () {
  $(".show-chat").click(function () {
    if ($('#whatsapp-chat:visible').length)
      $("#whatsapp-chat").addClass("hide").removeClass("show");
    else
      $("#whatsapp-chat").addClass("show").removeClass("hide");
  });

  $(".close-chat").click(function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
  });

  $("#send").click(function () {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=+14155238886" + e + f;
      window.open(g, "_blank");
    }
  });
});

