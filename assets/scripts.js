var masonryContainer = document.getElementById('gridContainer');
if(masonryContainer) {
  var macyInstance = Macy({
    container: masonryContainer,
    columns: 3
  });
}

var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100
});