$(window).load(function () {
  //Start up the skrollr object
  skrollr.init({
    //keeps the bottom from being long
    forceHeight: false,
  });

  // The rest of this controls switching Alice's moods using jQuery Waypoints

  // How to guess which frame is "being read".
  var beingRead = function () {
    // It would be approximately centered, of equal distance from top as from bottom.
    var $screenHeight = $.waypoints("viewportHeight");
    var $pageHeight = $(".page").height();
    var offset = (($pageHeight - $screenHeight) / 2) * -1;

    return offset;
  };

  $(".page").waypoint(
    function (direction) {
      var mood = $(this).data("mood");
      $("body").removeClass().addClass(mood);
      if (direction === "up") {
        // if scrolling up
        $(this)
          .addClass("in-view")
          .removeClass("scrolled-past")
          .waypoint("next")
          .removeClass("in-view");
      } else {
        // else, assuming we're not scrolling at all or are scrolling down
        $(this)
          .addClass("in-view")
          .removeClass("scrolled-past")
          .waypoint("prev")
          .removeClass("in-view")
          .addClass("scrolled-past");
      }
    },
    {
      offset: beingRead(),
    }
  );
});
