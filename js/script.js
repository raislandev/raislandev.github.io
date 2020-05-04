(function($) {
    "use strict"; // Start of use strict
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    // Select all links with hashes
    $('a[href*="#"]')
    .click(function(event) {
      // Figure out element to scroll to
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600, function() {});
      }  
    });
  
  })(jQuery); // End of use strict



$(document).ready(function(){
	$(window).scroll(function () {
    console.log($(this).scrollTop())
			if ($(this).scrollTop() > 50) {
        $('#back-to-top').css('display','inline');
        $('#back-to-top').fadeIn();
        
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
});




