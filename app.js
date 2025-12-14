
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

  // Animated counter for stats
  let counterAnimated = false;

  function animateCounters() {
    if (counterAnimated) return;

    $(".stat-number, .stat-value").each(function () {
      const $this = $(this);
      const target = parseInt($this.attr("data-target"));

      if (target && !$this.hasClass("counted")) {
        $this.addClass("counted");
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const stepDuration = duration / steps;

        const counter = setInterval(function () {
          current += increment;
          if (current >= target) {
            $this.text(target + "+");
            clearInterval(counter);
          } else {
            $this.text(Math.floor(current));
          }
        }, stepDuration);
      }
    });

    counterAnimated = true;
  }

  // Check if stats section is in viewport
  function checkStatsInView() {
    const statsSection = $(".achievements-modern-section");
    if (statsSection.length) {
      const elementTop = statsSection.offset().top;
      const elementBottom = elementTop + statsSection.outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        animateCounters();
      }
    }
  }

  $(window).on("scroll", function () {
    animateOnScroll();
    checkStatsInView();
  });

  animateOnScroll(); // Run on page load
  checkStatsInView(); // Check stats on page load
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

// Typed.js initialization (only if .text element exists)
if (document.querySelector(".text")) {
  const typed = new Typed(".text", {
    strings: [
      "Junior QA Tester @ EG India",
      "Software Engineer",
      "ISTQB® Certified Tester",
      "AI Enthusiast",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
}

// Dark Mode Toggle Functionality
$(document).ready(function () {
  const themeToggle = $("#themeToggle");
  const body = $("body");
  const icon = themeToggle.find("i");

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    body.addClass("dark-mode");
    icon.removeClass("fa-moon").addClass("fa-sun");
  }

  // Toggle theme on button click
  themeToggle.on("click", function () {
    body.toggleClass("dark-mode");

    if (body.hasClass("dark-mode")) {
      icon.removeClass("fa-moon").addClass("fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon.removeClass("fa-sun").addClass("fa-moon");
      localStorage.setItem("theme", "light");
    }
  });

  // Mobile Menu Toggle
  const mobileMenuToggle = $("#mobileMenuToggle");
  const navbarRight = $(".navbar-right");

  mobileMenuToggle.on("click", function () {
    $(this).toggleClass("active");
    navbarRight.toggleClass("active");
    $("body").toggleClass("menu-open");
  });

  // Close mobile menu when clicking on a link
  $(".menu-items a").on("click", function () {
    mobileMenuToggle.removeClass("active");
    navbarRight.removeClass("active");
    $("body").removeClass("menu-open");
  });

  // Close mobile menu when clicking outside
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".navbar-container").length &&
      navbarRight.hasClass("active")
    ) {
      mobileMenuToggle.removeClass("active");
      navbarRight.removeClass("active");
      $("body").removeClass("menu-open");
    }
  });
});

// Resume Modal Functionality
$(document).ready(function () {
  const resumeModal = $("#resumeModal");
  const resumeLink = $("#resumeLink");
  const closeResumeModal = $("#closeResumeModal");

  // Open resume modal
  resumeLink.on("click", function (e) {
    e.preventDefault();
    resumeModal.addClass("active");
    $("body").css("overflow", "hidden");
  });

  // Close resume modal
  closeResumeModal.on("click", function () {
    resumeModal.removeClass("active");
    $("body").css("overflow", "auto");
  });

  // Close modal when clicking outside
  resumeModal.on("click", function (e) {
    if ($(e.target).is(resumeModal)) {
      resumeModal.removeClass("active");
      $("body").css("overflow", "auto");
    }
  });

  // Close modal with Escape key
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && resumeModal.hasClass("active")) {
      resumeModal.removeClass("active");
      $("body").css("overflow", "auto");
    }
  });
});
