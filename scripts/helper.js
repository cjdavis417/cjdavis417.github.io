// keeps my age current 
var birthday = new Date('June 20, 1978 16:14:00');
var ageTimeStamp = Date.now() - birthday.getTime();
var ageStamp = new Date(ageTimeStamp);
var age = Math.abs(ageStamp.getUTCFullYear() - 1970)

document.getElementById('age').innerHTML = age;


/******* navigation stuff **********/
$(document).ready(function()
{
    applyNavigation();

});

// navigation functions
var lnStickyNavigation;

function applyNavigation() {
    applyScrollSpy();
    applyStickyNavigation();
    navHighlight();
}

function applyScrollSpy() {
    $('#navbar-example').on('activate.bs.scrollspy', function() {
        window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
    });
}

function applyStickyNavigation() {
    lnStickyNavigation = $('.scroll-down').offset().top + 20;
    $(window).on('scroll', function() {
        stickyNavigation();
    });
    stickyNavigation();
}

function stickyNavigation() {
    if($(window).scrollTop() > lnStickyNavigation) {
        $('body').addClass('fixed');
    } else {
        $('body').removeClass('fixed');
    }
}

function navHighlight() {

    var loc = $('#experiences').offset().top;

    if (loc < 0) {
        console.log('experience reached the top' + loc);
        $('li').addClass('stickyNavActive');
    }
}




