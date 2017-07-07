
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 2,
    center: true,
    thumbs: true,
    thumbsPrerendered: true,
    thumbImage: true,
    navigation:true,
    thumbItemClass: 'owl-thumb-item'
  });

  var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel',[300]);
    });
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
});
