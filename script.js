function slideNext() {
  var frame = $(".now");
  var afterFrame = frame.next("img");

  frame.removeClass("now");
  afterFrame.addClass("now");
}
function slidePrev() {
  var frame = $(".now");
  var prevFrame = frame.prev("img");

  frame.removeClass("now");
  prevFrame.addClass("now");
}
// function slider() {
//   var frame = $(".now");
//   var afterFrame = frame.next("img");
//
//   frame.removeClass("now");
//   afterFrame.addClass("now");
// }
function init() {
  $(".prev").click("slidePrev");
  $(".next").click("slideNext");
}
