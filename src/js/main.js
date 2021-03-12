/*
 * TODO: Fill in the comment block below replacing fields in [square brackets]
 * Main Website Script v1.0
 * [You Name Here] ([Month] [Year])
 *
 * Developed by WildWest, [Year] - http://www.designwildwest.com/
 *
 * NB: This script is relied upon by all WildWest scripts
 *
 * Changelog:
 * v1.0 - [DD]/[MM]/[YYYY] - Initial build
 */

// ---------------------------------------------------------------
// Parameters
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Parameters End
// ---------------------------------------------------------------



// ---------------------------------------------------------------
// Global Vars, Do not change anything below this line!
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Global Vars End, Do not change anything above this line!
// ---------------------------------------------------------------



// ---------------------------------------------------------------
// Functions Start
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Functions End
// ---------------------------------------------------------------



// ---------------------------------------------------------------
// JS Events
// ---------------------------------------------------------------

$(function() {
    "use strict";
    console.log('main: Document Ready');

    $('.h3-title-match').matchHeight();
});

$(window).on('load', function() {
    "use strict";
    console.log('main: Document Loaded');
});

// ---------------------------------------------------------------
// JS Events End
// ---------------------------------------------------------------
/*
 * TODO: Fill in the comment block below replacing fields in [square brackets]
 * Main Website Script v1.0
 * [You Name Here] ([Month] [Year])
 *
 * Developed by WildWest, [Year] - http://www.designwildwest.com/
 *
 * NB: This script is relied upon by all WildWest scripts
 *
 * Changelog:
 * v1.0 - [DD]/[MM]/[YYYY] - Initial build
 */

// ---------------------------------------------------------------
// Parameters
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Parameters End
// ---------------------------------------------------------------



// ---------------------------------------------------------------
// Global Vars, Do not change anything below this line!
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Global Vars End, Do not change anything above this line!
// ---------------------------------------------------------------



// ---------------------------------------------------------------
// Functions Start
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Functions End
// ---------------------------------------------------------------



// ---------------------------------------------------------------
// JS Events
// ---------------------------------------------------------------

$(function() {
    "use strict";
    console.log('main: Document Ready');
});

$(window).on('load', function() {
    "use strict";
    console.log('main: Document Loaded');

    // --------------------------------------------------
    // Element: menu
    // --------------------------------------------------
    $(".menu-trigger").click(function() {
        $(".menu-toggle").toggleClass("active");
    });

    // --------------------------------------------------
    // Element: smooth-scroll
    // --------------------------------------------------
    $(".smooth-scroll").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault;

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

});
// ---------------------------------------------------------------
// JS Events End
// ---------------------------------------------------------------
