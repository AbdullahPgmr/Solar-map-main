$(document).ready(function () {
  var width = $(".content").width();
  var height = $(".content").height();
  var verticalKaificent = 0.2;
  var deltaMerc = 0, deltaVenus = 0, deltaEarth = 0, deltaMars = 0, deltaJupiter = 0;
  var deltaSaturn = 0, deltaUranus = 0, deltaNeptune = 0, deltaMoon = 0;
  var n = 20;

  spacePosition();
  drawCircles();
  scaleHandler();

  $(window).scrollTop($(window).height());
  $(window).scrollLeft($(window).width() / 2);

  var timerId;
  var planets = [".mercury_container", ".venus_container", ".earth_moon_container", 
                 ".mars_container", ".jupiter_container", ".saturn_ring_container", 
                 ".uranus_container", ".neptune_container"];

  planets.forEach(function(planet) {
      $(planet).on("mouseover", function() {
          var tooltip = $(this).find(".tooltip");
          tooltip.css("display", "block");
      });

      $(planet).on("mouseout", function() {
          var tooltip = $(this).find(".tooltip");
          tooltip.css("display", "none");
      });
  });

  var start = $("#start");
  start.click(function () {
      timerId = setInterval(move, 20);
  });

  var stop = $("#stop");
  stop.click(function () {
      clearInterval(timerId);
  });

  function move() {
      moveEarth();
      moveMercury();
      moveVenus();
      moveMars();
      moveJupiter();
      moveSaturn();
      moveUranus();
      moveNeptune();
      moveMoon();
  }

  function moveMercury() {
      var alpha = (Math.PI * deltaMerc) / 180;
      $(".mercury_container").css("top", height / 2 - Rmercury * Math.sin(alpha) * verticalKaificent);
      $(".mercury_container").css("left", width / 2 - Rmercury * Math.cos(alpha));
      $(".shadow_mercury").css("transform", "rotate(" + deltaMerc + "deg)");

      if (deltaMerc < 180) {
          $(".mercury_container").css("z-index", 11);
      } else {
          $(".mercury_container").css("z-index", 9);
      }

      deltaMerc += 47.87 / n;
      if (deltaMerc > 360) {
          deltaMerc -= 360;
      }
  }

  // Implement moveVenus, moveEarth, moveMoon, moveMars, moveJupiter, moveSaturn, moveUranus, moveNeptune similarly

  function spacePosition() {
      // Positioning of each planet
      // Example for Mercury
      var mercuryContainer = $(".mercury_container").eq(0);
      var Rmercury = 90;
      mercuryContainer.css("top", height / 2 - mercuryContainer.outerHeight() / 2 + "px");
      mercuryContainer.css("left", width / 2 - mercuryContainer.outerWidth() / 2 + Rmercury + "px");

      // Implement positioning for other planets similarly
  }

  function drawCircles() {
      // Drawing circles for orbits
      // Example for Mercury circle
      var mercuryCircle = $(".mercury_circle").eq(0);
      mercuryCircle.css("left", width / 2 - Rmercury);
      mercuryCircle.css("top", height / 2 - Rmercury * verticalKaificent);
      mercuryCircle.css("width", Rmercury * 2);
      mercuryCircle.css("height", Rmercury * 2 * verticalKaificent);

      // Implement circles for other planets similarly
  }

  function scaleHandler() {
      // Scaling functionality
      // Example: $(document).mousemove(function (event) { ... });
  }
});
