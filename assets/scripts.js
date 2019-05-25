var masonryContainer = document.getElementById('gridContainer');
if(masonryContainer) {
  var grid = document.querySelector('#gridContainer');
  var msnry = new Masonry( grid, {
    itemSelector: '.imageContainer',
    columnWidth: '.imageContainer.small',
    percentPosition: true,
    transitionDuration: 0
  });
}



imagesLoaded( document.querySelector('#gridContainer'), function( instance ) {
  msnry.layout();
});


var mySwiper = new Swiper('.swiper-container', {
  speed: 200,
  spaceBetween: 100
});

mySwiper.on('transitionEnd', function () {
  var activeIndex = mySwiper.activeIndex + 1;
  document.getElementById('currentIndex').innerHTML = activeIndex;
});


function sliderPrev() {
  mySwiper.slidePrev(200, false);	
}

function sliderNext() {
  mySwiper.slideNext(200, false);	
}