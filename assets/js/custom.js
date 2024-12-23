(function ($) {
	"use strict";
  
	// Page loading animation
	$(window).on("load", function () {
	  $("#js-preloader").addClass("loaded");
	});
  
	// Header background toggle on scroll
	$(window).scroll(function () {
	  var scroll = $(window).scrollTop();
	  var box = $(".header-text").height();
	  var header = $("header").height();
  
	  if (scroll >= box - header) {
		$("header").addClass("background-header");
	  } else {
		$("header").removeClass("background-header");
	  }
	});
  
	// Owl carousel for banners
	$(".owl-banner").owlCarousel({
	  center: true,
	  items: 1,
	  loop: true,
	  nav: true,
	  dots: true,
	  navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>',
	  ],
	  margin: 30,
	});
  
	// Owl carousel for testimonials
	$(".owl-testimonials").owlCarousel({
	  items: 1,
	  loop: true,
	  autoplay: true,
	  autoplayTimeout: 5000,
	  smartSpeed: 800,
	  dots: true,
	});
  
	// EmailJS form submission handling
	if (document.getElementById("schedule-form")) {
	  // Initialize EmailJS with your public key
	  emailjs.init("x4WwsTu0QSwcmgAa2");
  
	  document
		.getElementById("schedule-form")
		.addEventListener("submit", function (e) {
		  e.preventDefault();
  
		  const email = document.getElementById("email").value;
		  const mobile = document.getElementById("mobile").value; // Mobile phone field
		  const scheduleDate = document.getElementById("schedule-date").value;
		  const feedback = document.getElementById("form-feedback");
  
		  // Validate inputs
		  if (!email || !mobile || !scheduleDate) {
			feedback.textContent = "Please fill in all fields.";
			feedback.style.color = "red";
			return;
		  }
  
		  // Send email using EmailJS
		  emailjs
			.send("service_3kb43gv", "template_ec4mrqv", {
			  user_email: email,
			  user_mobile: mobile, // Include mobile phone
			  schedule_date: scheduleDate,
			})
			.then(
			  () => {
				feedback.textContent =
				  "Your appointment has been successfully scheduled!";
				feedback.style.color = "green";
				document.getElementById("schedule-form").reset();
			  },
			  (error) => {
				console.error("EmailJS Error:", error);
				feedback.textContent =
				  "Failed to schedule the appointment. Please try again.";
				feedback.style.color = "red";
			  }
			);
		});
	}
  
	// Menu Dropdown Toggle
	if ($(".menu-trigger").length) {
	  $(".menu-trigger").on("click", function () {
		$(this).toggleClass("active");
		$(".header-area .nav").slideToggle(200);
	  });
	}
  
	// Menu elevator animation
	$(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
	  if (
		location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
		location.hostname == this.hostname
	  ) {
		var target = $(this.hash);
		target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
		if (target.length) {
		  var width = $(window).width();
		  if (width < 991) {
			$(".menu-trigger").removeClass("active");
			$(".header-area .nav").slideUp(200);
		  }
		  $("html,body").animate(
			{
			  scrollTop: target.offset().top - 80,
			},
			700
		  );
		  return false;
		}
	  }
	});

	document.querySelector('.menu-trigger').addEventListener('click', function () {
		document.querySelector('.nav').classList.toggle('show');
	  });
	  
  
	// Page loading animation
	$(window).on("load", function () {
	  if ($(".cover").length) {
		$(".cover").parallax({
		  imageSrc: $(".cover").data("image"),
		  zIndex: "1",
		});
	  }
  
	  $("#preloader").animate(
		{
		  opacity: "0",
		},
		600,
		function () {
		  setTimeout(function () {
			$("#preloader").css("visibility", "hidden").fadeOut();
		  }, 300);
		}
	  );
	});
  })(window.jQuery);
  