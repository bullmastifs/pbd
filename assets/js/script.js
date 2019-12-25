//jquery smooth animation
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
        window.location.hash = hash;
      });
    }
  });
});

//form actions
$(document).ready(function(){
  $("#hide").click(function(){
    $("#form").hide(400);
  });
  $("#show").click(function(){
    $("#form").show(400);
  });
  $("#mySidenav").on('click', function(event) {console.log("closing");    
    closeNav();});
});

//scroll up button features
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 800) {
    $('.btn-up').fadeOut();
  } else {
    $('.btn-up').fadeIn();
  }
});

//side menu
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}