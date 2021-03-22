function slideNext() {
  var frame = $(".active");
  var afterFrame = frame.next("img");

  frame.removeClass("active");
  afterFrame.addClass("active");

  if (frame.hasClass("last")) {
    frame.next("first");
  }
}
function slidePrev() {
  var frame = $(".active");
  var prevFrame = frame.prev("img");

  frame.removeClass("active");
  prevFrame.addClass("active");

  if (frame.hasClass("first")) {
    frame.prev("last");
  }
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
