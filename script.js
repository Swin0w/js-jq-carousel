function slideNext() {
  var frame = $(".active");
  var afterFrame = frame.next("img");

  frame.removeClass("active");
  afterFrame.addClass("active");
}
function slidePrev() {
  var frame = $(".active");
  var prevFrame = frame.prev("img");

  frame.removeClass("active");
  prevFrame.addClass("active");

  if (frame.hasClass(active end)) {
    ;
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
