$(document).ready(function() {
  $(".clickable-js").click(function() {
    $("#js-def-showing").toggle();
    $("clickable").removeClass();
    $("#js-def-hidden").show();
  });

  $(".clickable-string").click(function() {
    $("#string-def-showing").toggle();
    $("clickable").removeClass();
    $("#string-def-hidden").show();
  });
});

// objective: corresponding nav-item underlined while on corresponding page
// 1) each nav-item has unique id
// 2) other nav-item underlines hidden when corresponding page not in use
// 3) nav-item underline must work regardless of onclick
// 4) nav-item underline must work even on page load