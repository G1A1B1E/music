
// ver and loaded check
const ver = 0.1
console.log(ver)
console.log('Global Loaded...')

$(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 30){
        $("body").addClass("sticky-header");
      }else{
        $("body").removeClass("sticky-header");
      }//if-else
    });//win func.
  });//ready func.

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.footer-link');
    const movementSpeed = 3;
    
    const hoverLink = (event) => {
        let targetNode = event.target;

        const { left, top, width, height } = targetNode.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        let x = (centerX - event.pageX) / movementSpeed;
        let y = (centerY - event.pageY) / movementSpeed;
    
        targetNode.style.setProperty('--x', `${x}px`);
        targetNode.style.setProperty('--y', `${y}px`);
    }

    links.forEach(link => {
        link.addEventListener('mousemove', hoverLink);
    });
});

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});