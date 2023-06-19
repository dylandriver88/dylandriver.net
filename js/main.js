var wpOffset = 60;


var layout = {
    doneAnimateSkill: false,
    init: function() {
        this.initStickyMenu();
        this.initHead();
    },
    initHead: function() {
        var $img = $('header .big-header:visible');
        $('header').height($(window).height());
        // $('#overlay').height($(window).height());
        $(window).resize(function() {
            $img = $('header .big-header:visible');

            if ($img[0] == undefined)
                return;

            var nW = $img[0].naturalWidth;
            var nH = $img[0].naturalHeight;

            var css_obj = {};
            var dim = '';

            if (nW > $(window).width() && nH <= $(window).height()) {
                dim = 'height';
            } else if (nH > $(window).height() && nW <= $(window).width()) {
                dim = 'width';
            } else {
                var w_diff = $(window).width() - nW;
                var h_diff = $(window).height() - nH;
                var n_height = nH * $(window).width() / nW;

                //compute by width
                if (n_height > $(window).height())
                    dim = 'width';
                else
                    dim = 'height';
            }

            if (dim == 'width') {
                var n_height = nH * $(window).width() / nW;
                css_obj = {
                    'width': $(window).width(),
                    'top': $(window).height() - n_height
                }
            } else {
                var n_width = $(window).height() * nW / nH;
                css_obj = {
                    'height': $(window).height(),
                    'left': ($(window).width() - n_width) / 2
                }
            }

            $('header').height($(window).height());
            $img.removeAttr('style');
            $img.css(css_obj);
            //alert($img.height());
        });

    },
    initStickyMenu: function() {
        //Sticky menu

        $(document).scroll(function() {
            var $menu = $('#menu');
            var $header = $('header');
            var origOffsetY = $menu.offset().top;


            if ($(window).scrollTop() >= origOffsetY) {
                $menu.find('nav').addClass('fixed-top');
            } else {
                $menu.find('nav').removeClass('fixed-top');
            }

        });
        $(document).trigger('scroll');
    },
};
$(document).ready(function() {
    layout.init();
});


function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}



// Dynamic date in footer
var newDate = new Date();
newDate.setDate(newDate.getDate());

document.getElementById('displayDate').innerHTML = newDate.getFullYear();

// Header slides v2
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = '<i class="arrow_triangle-right"></i>';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '<i class="icon_pause"></i>';
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function() {
    if (playing) { pauseSlideshow(); } else { playSlideshow(); }
};

// Read more in About section
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

// scrollTo functionality
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top -50
        }, 1000);
    }

});

$("#arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#menu").offset().top
    }, 1000);
});