import { Component, OnInit, Inject } from '@angular/core';

import { MaterialModuleLoad } from '../MatcomponentsLoad';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

declare var jquery: any;
declare var $: any;
import 'hammerjs/hammer';



@Component({
  selector: 'india-city-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})

export class PostRequestBudgetDialog {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }
}


@Component({
  selector: 'app-post-request-budget',
  templateUrl: './post-request-budget.component.html',
  styleUrls: ['./post-request-budget.component.css']
})

export class PostRequestBudgetComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    // $("#mainForm").steps();
    // $("#example-vertical").steps({
    //   headerTag: "h3",
    //   bodyTag: "section",
    //   transitionEffect: "slideLeft",
    //   stepsOrientation: "vertical",
    //   cssClass: 'my-stepper'
    // });
  }

  ngOnInit() {
    // console.log("------------------1111111111111");

    setTimeout(() => {

      // $("#slider-range").slider({
      //   range: true,
      //   min: 0,
      //   max: 500,
      //   values: [75, 300],
      //   slide: function (event, ui) {
      //     $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      //   }
      // });
      // $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      //   " - $" + $("#slider-range").slider("values", 1));

      var dom1 = $('.post-request-step1');
      this._bindSteps(dom1);
      var dom2 = $('.post-request-step2');
      this._bindSteps(dom2);
      var dom3 = $('.post-request-step3');
      this._bindSteps(dom3);



      let plusMinusDiv = $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down first-digit">-</div></div>');
      plusMinusDiv.insertAfter('input.duration-days-input');

      var $customnumnerInput = $('.custom-number-input');
      this._bindCustomNumberInput($customnumnerInput);

      var $datePickerDom1 = $('#datepicker-start-date');
      var $datePickerDom2 = $('#datepicker-end-date');
      var $monthPickerDom = $('.monthPicker');

      this._bindDatePicker($datePickerDom1);
      this._bindDatePicker($datePickerDom2);
      this._bindMonthPicker($monthPickerDom);

      var $budgetSlider = $('.custom-budget-slider #budgetSlider');
      var $minValueDom = $('.custom-budget-slider .minValue');
      var $maxValueDom = $('.custom-budget-slider .maxValue');
      this._bindBudgetSlider($budgetSlider, $minValueDom, $maxValueDom);

    }, 100);

    // $('.post-request-step .slick-list').addClass('abcd');
    // $('.post-request-step .slick-list').css("height", "500px !important")
    // $('.post-request-step .slick-list').css("color", "#f00");
    this.setLocalStorage('include_flight', this.include_flight);
    this.setLocalStorage('food_preference', this.food_preference);

    this._bindRangeSlider()
    this._bindFoodPreference()
    this._bindFoodDescription()
    this._bindThemeBoxesValue()
  }

  // public selectedDestination = 'india';
  // public minDate = new Date(2017, 9, 1);
  // public maxDate = new Date(2017, 11, 31);
  public hotel;

  public foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  public hotel_preference = [
    'Close to city center (may be expensive)',
    'Away from city center',
    'Near train station',
    'Near airport',
  ];

  public isLinear = false;
  public hotel_preference_model = 'Away from city center';
  public include_flight = false;
  public food_preference = 'Vegetables';

  setLocalStorage(key, val) {
    window.localStorage.setItem(key, val);
  }

  onIncludeFlight() {
    let isChecked = $('input[type="checkbox"].include_flight').is(':checked');
    this.setLocalStorage('include_flight', isChecked);
    // window.localStorage.setItem('flexible_date', isChecked);
  }

  _bindRangeSlider(){
    // $('.slider').on('slide', function (ev) {
    //   console.log($('#slider1').val());
    // });
  }

  _bindFoodPreference(){
    let _this = this
    $('#food_preference').change(function () {
      // console.log(this);
      var sVal = $(this).find('>option:selected').text();
      console.log(sVal);

      _this.setLocalStorage('food_preference', sVal);
    })
  }

  _bindFoodDescription() {
    let _this = this
    // console.log($('.brief-text-other .others_desc'))
    $('.brief-text-other .food_description').on('input', function () {
      // console.log(this.value);
      _this.setLocalStorage('food_description', this.value);
    })
  }

  selectTravelDestination(travelArea, el) {
    // console.log(travelArea);
    // console.log(el);
    // this.selectedDestination = travelArea;

  }

  onThemeChk(){
    var sTheme = $('.theme-boxes :checkbox:checked')
      .map(function () {
        return this.value;
      })
      .get()
      .join('|');

    this.setLocalStorage('offers_receive', sTheme);
  }

  _bindThemeBoxesValue() {
    var $themeBox = $(".theme-boxes .theme-box");

    $themeBox.find("[type='checkbox']").change(function () {
      // console.log(this);
      // console.log(this.checked);
      if (this.checked) {
        // $(this).parentsUntil('.theme-box').css({
        //   'background-color': '#b8c6f6'
        // });
        $(this).closest('.theme-box').addClass('selected-box');
      } else {
        // $(this).parentsUntil('.theme-box').css({
        //   'background-color': '#f6f8ff'
        // });
        $(this).closest('.theme-box').removeClass('selected-box');
      }
      // var arr = []
      // arr.push(this.value);
      // console.log(arr);
    });

  }

  onHotelChk(){
    // console.log(this);
    var checkedChk = $('.radioChk :checkbox:checked');
    console.log(checkedChk);
    var sHotel = checkedChk
      .map(function () {

        // $(this).closest('.city-state-list-text').find('.custom-number-input').show();
        // var newVal = this.value + ""
        return this.value;
      })
      .get()
      .join('|');
    this.hotel = sHotel;
    this.setLocalStorage('hotel', this.hotel)
  }

  onRadioChk(){    
    // console.log($('.radios-container :radio:checked').val());
    var hotel_preference = $('.radios-container :radio:checked').val();
    this.setLocalStorage('hotel_preference', hotel_preference)    
  }


  startdateSelected() {
    console.log(arguments);
  }

  _bindBudgetSlider(dom, minVlaue, maxValue) {
    var _this = this;
    dom.slider({
      min: 10000,
      max: 100000,
      step: 1,
      values: [10000, 100000],
      slide: function (event, ui) {
        // console.log(event)
        // console.log(ui)

        _this.setLocalStorage('budget_from', ui.values[0]);
        _this.setLocalStorage('budget_to', ui.values[1]);
        
        for (var i = 0; i < ui.values.length; ++i) {
          $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
        }
        // dom.find('.ui-slider-handle').each(function ($el) {
        //   console.log(arguments);
        //   $el.attr('data-value', ui.values[i])
        // })
      }
    });

    $("input.sliderValue").change(function () {
      var $this = $(this);
      $("#slider").slider("values", $this.data("index"), $this.val());
    });
  }

  _bindCustomNumberInput(dom) {
    dom.each(function () {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");

        if (newVal == 1) {
          btnDown.addClass('first-digit');
        } else {
          btnDown.removeClass('first-digit');
        }


      });

      btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }

        if (newVal == 1) {
          btnDown.addClass('first-digit');
        } else {
          btnDown.removeClass('first-digit');

        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
  }

  _bindDatePicker(dom) {
    dom.datepicker({
      dateFormat: 'dd M yy',
      showOtherMonths: true,
      selectOtherMonths: true,
      // changeMonth: true,
      // changeYear: true,
      // showButtonPanel: true,

      onClose: function (dateText, inst) {
        // var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
        // var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        // $(this).val($.datepicker.formatDate('dd M yy', new Date(year, month, 1)));
      }
    });
  }

  _bindMonthPicker(dom) {
    dom.datepicker({
      dateFormat: 'MM yy',
      changeMonth: true,
      changeYear: true,
      // showButtonPanel: true,

      onClose: function (dateText, inst) {
        var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).val($.datepicker.formatDate('MM yy', new Date(year, month, 1)));
      }
    });

    dom.focus(function () {
      $(".ui-datepicker-calendar").hide();
      $("#ui-datepicker-div").position({
        my: "center top",
        at: "center bottom",
        of: $(this)
      });
    });


  }

  // height:'800px',
  openDialog() {
    this.dialog.open(PostRequestBudgetDialog, {
      width: '800px',
      data: {
        animal: 'panda'
      }
    });
  }

  _bindSteps(dom) {
    var afterChange = function (slider, i) {
      // console.log(slider, i)
      var slideHeight = $(slider.$slides[i]).height();
      var prevSlideHeight = $(slider.$slides[i - 1]).height();
      // console.log(slideHeight);
      // console.log(prevSlideHeight);
      // console.log(slider.$slider)
      // console.log(slider.$list)
      $(slider.$slider).height(slideHeight + (prevSlideHeight / 2));
      // $(slider.$list).height("50px");
      // $(slider.$list).height(slideHeight + '!important');

      $(slider.$list).css("min-height", slideHeight + (prevSlideHeight / 2));
      // $('.slick-list.draggable').css("height: " + slideHeight+"px !important;");
      // $('.slick-list.draggable').css("height", "50px");
      $(slider.$list).css("padding-top", "200px !important");

      if (slideHeight > prevSlideHeight) {
        console.log($(slider.$list).find('.slick-track'))
        $(slider.$list).find('.slick-track').css("transform", 'translate3d(0px, 0px, 0px)');
      }
    };

    dom.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      // console.log(event, slick, currentSlide, nextSlide);
      afterChange(slick, nextSlide)
    });

    dom.on('afterChange', function (event, slick, currentSlide) {
      // console.log(event, slick, currentSlide);
      // afterChange(slick, currentSlide)
    });



    // dom.slick({
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   // asNavFor: '.slider-for',
    //   dots: false,
    //   centerMode: true,
    //   focusOnSelect: true,
    //   vertical: true,
    //   arrows: false,
    //   // swipeToSlide: true,
    //   // infinite: true,
    //   infinite: false,
    //   initialSlide: 0,
    //   // updateAdaptiveHeight: true,
    //   verticalSwiping: true,
    //   // onAfterChange: afterChange
    //   // fade: true
    // });

    const $slider = $(dom);
    $slider
      .on('init', () => {
        mouseWheel($slider)
      })
      .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        // swipeToSlide: true,
        // infinite: true,
        infinite: false,
        initialSlide: 0,
        // updateAdaptiveHeight: true,
        verticalSwiping: true,
        // onAfterChange: afterChange
        // fade: true
      })
    function mouseWheel($slider) {
      $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
    }
    function mouseWheelHandler(event) {
      event.preventDefault()
      const $slider = event.data.$slider
      const delta = event.originalEvent.deltaY
      if (delta > 0) {
        $slider.slick('slickNext')
      } else {
        $slider.slick('slickPrev')
      }
    }
  }

  onStepEnter1() {
    console.log(arguments);
    var dom1 = $('.post-request-step1');

    if (dom1.hasClass('slick-initialized')) {
      console.log("unbind1")
      // $('.post-request-step').unslick();
      // dom1.unslick();
      // dom1.slick("unslick");
      // dom1.slick("destroy");
    }
    setTimeout(() => {
      dom1.slick('reinit');
      dom1.slick('slickGoTo', 0);
      // this._bindSteps(dom1);
      this.scrollSetBlueBg();
    }, 100);
  }

  onStepEnter2() {

    console.log(arguments);
    var dom2 = $('.post-request-step2');
    if (dom2.hasClass('slick-initialized')) {
      console.log("unbind2")
      // $('.post-request-step').unslick();
      // dom2.unslick();
      // dom2.slick("unslick");
      // dom2.slick("destroy");
    }

    setTimeout(() => {
      dom2.slick('reinit');
      dom2.slick('slickGoTo', 0);
      // this._bindSteps(dom2);
      this.scrollSetBlueBg();
    }, 100);
  }


  onStepEnter3() {
    console.log(arguments);
    var dom3 = $('.post-request-step3');
    if (dom3.hasClass('slick-initialized')) {
      console.log("unbind3")
      // $('.post-request-step').unslick();
      // dom3.unslick();
      // dom3.slick("unslick");
      // dom3.slick("destroy");
    }

    setTimeout(() => {
      dom3.slick('reinit');
      dom3.slick('slickGoTo', 0);
      // this._bindSteps(dom3);
      this.scrollSetBlueBg();
    }, 100);
  }

  onStepEnter4() {
    this.scrollSetBlueBg();

  }

  scrollSetBlueBg() {
    setTimeout(() => {
      var $aLi = $("wizard-navigation-bar.vertical ul.steps-indicator li");
      // console.log($aLi);
      // console.log($aLi.filter("li.current"));
      console.log($aLi.filter("li.current").prevAll());

      $aLi.filter("li.current").prevAll().css('background-color', '#5a7ded !important')
    }, 0);
  }

}


