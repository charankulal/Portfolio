
$(document).ready(function () {
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 550) {
      $(".navbar").addClass("solid");
      $(".back-to-top").addClass("visible");
    } else {
      $(".navbar").removeClass("solid");
      $(".back-to-top").removeClass("visible");
    }
  });
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
        800,
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
    "Engineer",
    "Full Stack developer",
    "Android Developer",
    "Software developer",
    "UI/UX Designer",
    
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 10,
  loop: true
});
