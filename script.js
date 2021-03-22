function slideNext() {
  var frame = $(".active");
  var afterFrame = frame.next("img");

  if (frame.hasClass("last")) {
    $(".first").addClass("active");
  } else {
    afterFrame.addClass("active");
  }
  frame.removeClass("active");
}
function slidePrev() {
  var frame = $(".active");
  var prevFrame = frame.prev("img");

  if (frame.hasClass("first")) {
    frame.removeClass("active");
    $(".last").addClass("active");
  } else {
    prevFrame.addClass("active");
  }
  frame.removeClass("active");
}
// function slider() {
//   var frame = $(".now");
//   var afterFrame = frame.next("img");
//
//   frame.removeClass("now");
//   afterFrame.addClass("now");
// }
function init() {
  $(".prev").click(slidePrev);
  $(".next").click(slideNext);
}

init();
