var title = document.title;
var l = title.length;
var n = Number(title[l - 1]);

$(document).ready(function() {
    switch (n) {
        case 1:
            $("#naslov").css("background-image", "url('../Materials/img/novost1.jpg')");
            break;
        case 2:
            $("#naslov").css("background-image", "url('../Materials/img/novost2.jpg')");
            break;
        case 3:
            $("#naslov").css("background-image", "url('../Materials/img/novost3.jpg')");
            break;
        default:
            break;
    }
  
  });