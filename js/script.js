// Scroll to top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var top = document.getElementById('totop');
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        top.style.display = 'block';
    } else {
        top.style.display = 'none';
    }
};
function scrollToTop() {
    var position = document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout('scrollToTop()', 30);
    } else clearTimeout(scrollAnimation);
};

// ----carousel
var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel_cell');
var cellCount = 6;
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth+20;
var radius, theta;
theta = 360 / cellCount;
radius = Math.round( ( cellWidth / 2) / Math.tan( Math.PI / cellCount ) );

// set position
for ( var i = 0; i < cellCount; i++ ) {
    var cell = cells[i];
    var cellAngle = theta * i;
    cell.style.transform = 'rotateY(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
}
carousel.style.transform = 'translateZ(' + -radius + 'px) ';

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 'rotateY' + '(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});
