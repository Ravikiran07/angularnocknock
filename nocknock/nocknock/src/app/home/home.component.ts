import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    // console.log("HomeComponent ....")
   }

  ngOnInit() {
    let _this = this;    
    _this.setVideo();
    _this.setFeedbackSlider();

    // setTimeout(() => {
    //   console.log("Hello from setInterval");
    // }, 50);
  }

  AfterViewInit(){
    // let _this = this;
    
        // _this.setVideo();
        // _this.setFeedbackSlider();
        // setTimeout(() => {
        //   console.log("Hello from setInterval");
        // }, 50);
  }

  setVideo() {
    var url = $("#cartoonVideo").attr('src');
    var videoUrl = 'https://www.youtube.com/embed/ZSt9tm3RoUU?autoplay=1';

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#how-it-works-modal").on('hide.bs.modal', function () {
      $("#cartoonVideo").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#how-it-works-modal").on('show.bs.modal', function () {
      $("#cartoonVideo").attr('src', videoUrl);
    });

    $('#how-it-works-modal').on('hidden.bs.modal', function () {
      $('cartoonVideo', 'stopVideo');
    });
  }

  setFeedbackSlider() {
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
            prevArrow: '<span class="nav-arrow left-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
            nextArrow: '<span class="nav-arrow right-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>'
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
  }

  // menuToggle(menuButton){
    // console.log(menuButton);
    // let $menu = $('#navbarSupportedContent');
    // $menu.toggleClass('show');
    // if($menu.hasClass('show')){
    //   $menu.removeClass('show');
    // } else {
    //   $menu.addClass('show')
    // }
  // }

}
