$(function () {
  // body...
  // console.log($('.person-reviews'));
  // console.log($('.person-images'));
  // console.log($('.person-reviews').find('>div'));
  // console.log($('.person-images').find('>div'));

  // (".slider").not('.slick-initialized').slick()



  var url = $("#cartoonVideo").attr('src');
  var videoUrl = 'https://www.youtube.com/embed/ZSt9tm3RoUU?autoplay=1';

  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#how-it-works-modal").on('hide.bs.modal', function(){
      $("#cartoonVideo").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#how-it-works-modal").on('show.bs.modal', function(){
      $("#cartoonVideo").attr('src', videoUrl);
  });

  $('#how-it-works-modal').on('hidden.bs.modal', function () {
    $('cartoonVideo', 'stopVideo');
});



	$('.person-reviews').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: false,
      asNavFor: '.person-images',
      customPaging: function (slider) {
        return '<span class="bordered-span"></span>';
      },
      responsive: [
        {
          // breakpoint: 1024,
          // settings: {
            // slidesToShow: 1,
            // slidesToScroll: 1,
            // arrows: false,
            // dots: false,
          // }
        }, 
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: false,
        //     dots: false,
        //   }
        // }
      ]
    });

  

    $('.person-images').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      // asNavFor: '.person-reviews',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:'<span class="nav-arrow left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
            nextArrow:'<span class="nav-arrow right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>'
          }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: true,
        //     prevArrow:'<span class="nav-arrow left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
        //     nextArrow:'<span class="nav-arrow right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>'
        //   }
        // }
      ]
    });
})