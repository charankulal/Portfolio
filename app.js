
$(document).ready(function () {
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 550) {
      $(".navbar").addClass("solid");
      $("#backToTop").addClass("visible");
    } else {
      $(".navbar").removeClass("solid");
      $("#backToTop").removeClass("visible");
    }
  });

  // Back to top button click handler
  $("#backToTop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  // Animate elements on scroll
  function animateOnScroll() {
    $(".proj, .bar, .cert-badge, .stat-item").each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass("animate-in");
      }
    });
  }

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); // Run on page load
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        200,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

const typed = new Typed(".text", {
  strings: [
    "Polyglot Developer",
    "Junior QA Tester @ EG India",
    "Full Stack Developer",
    "ISTQB® Certified Tester",
    "Android Developer",
    "React Native Enthusiast",
    "AI Enthusiast",
    "Open Source Contributor",
    "UI/UX Designer",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});
