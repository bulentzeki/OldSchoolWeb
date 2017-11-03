$(document).ready(function() {
  console.log("ready!");

  if (window.location.hash === "#something") {
    console.log("hide something when document is ready");
    $("#forward-link").hide();
  }

  $(window).on('hashchange',function(){
    console.log("hide something when hash is changed!");
    $("#forward-link").hide();
  });
});
