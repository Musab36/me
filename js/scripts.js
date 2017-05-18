$(document).ready(function(){
  $(".move").click(function(){
    $(".all").hide();
     $(".welcome").show(3000);
  });

});

$(document).ready(function() {

var count = 0;
 var images = ["home.jpg","co.jpg"]
 var image = $("#us");

image.css("background-image", "url(" + images[count] + ")");
setInterval(function() {
   image.fadeOut(300, function() {
     image.css("background-image", "url(" + images[count++] + ")");
     image.fadeIn(300);
   });
   if (count === images.length) {
     count = 0;
   }
 }, 10000);

});

$(document).ready(function() {

var count = 0;
 var images = ["home.jpg","ca3.jpg","ca4.jpg","children.jpg"]
 var image = $(".intro");

image.css("background-image", "url(" + images[count] + ")");
setInterval(function() {
   image.fadeOut(300, function() {
     image.css("background-image", "url(" + images[count++] + ")");
     image.fadeIn(300);
   });
   if (count === images.length) {
     count = 0;
   }
 }, 10000);

});
