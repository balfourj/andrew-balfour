/*
 * Swiper Script v1.0
 * Joseph Balfour (June 2019)
 *
 * Developed by WildWest, 2019 - http://www.designwildwest.com/
 */

// ---------------------------------------------------------------
// Parameters
// ---------------------------------------------------------------

// --------------------------------------------------
// Swipers
// --------------------------------------------------
var heroCarousel;

// --------------------------------------------------
// Swiper configs
// --------------------------------------------------
var swiperConfigs = {};

swiperConfigs.heroCarousel = {
    direction: "horizontal",

    slidesPerColumnFill: "row",

    grabCursor: true,

    autoplay: true,
    loop: true,

    speed: 3000,

    effect: "fade",

    slidesPerView: 1,
    slidesPerGroup: 1,
};

swiperConfigs.contentCarousel = {
    // Optional parameters
    direction: 'horizontal',


    speed: 2000,
    effect: 'slide',
    grabCursor: true,



    // Navigation set individually

    // Pagination set individually
};

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
});

$(document).ready(function () {
    // --------------------------------------------------
    // All the swipers initiated
    // --------------------------------------------------
    heroCarousel1 = new Swiper ('.hero-carousel-1', swiperConfigs.heroCarousel);

    contentCarousel1 = new Swiper ('.content-carousel-1',
                                   $.extend({},
                                            swiperConfigs.contentCarousel,
                                            {navigation: {nextEl: '.content-carousel-1-nav .swiper-button-next', prevEl: '.content-carousel-1-nav .swiper-button-prev'}},
                                            {pagination: {el: '.content-carousel-1-pagination', clickable: true}}
                                           )
                                  );
});

// ---------------------------------------------------------------
// JS Events End
// ---------------------------------------------------------------
