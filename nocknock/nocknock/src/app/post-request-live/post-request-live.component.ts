import { Component, OnInit, Inject } from '@angular/core';

import { MaterialModuleLoad } from '../MatcomponentsLoad';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

declare var jquery: any;
declare var $: any;
import 'hammerjs/hammer';

@Component({
  selector: 'india-city-dialog',
  templateUrl: 'dialog-country-example-dialog.html',
})

export class PostRequestCountryLiveDialog {
  constructor(
    public dialogRef1: MatDialogRef<PostRequestCountryLiveDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);

    var aExistingCitys = this.data.sCity.split('|');
    console.log(aExistingCitys);

    aExistingCitys.forEach(sCity => {
      console.log(sCity)
      var aCheckbox = $('.state-chk-boxes :checkbox');
      // console.log(aCheckbox);    

      for (var index = 0; index < aCheckbox.length; ++index) {
        // console.log(aCheckbox[index].value == sCity);
        if (aCheckbox[index].value == sCity) {
          $(aCheckbox[index]).attr('checked', 'checked');
        }
      }
    });


    let plusMinusDiv = $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down first-digit">-</div></div>');
    plusMinusDiv.insertAfter('input.duration-days-input');

    var $customnumnerInput = $('.custom-number-input');
    this._bindCustomNumberInput($customnumnerInput);
    setTimeout(function () {
      $('.state-chk-boxes .custom-number-input').hide();
    }, 100);
  }

  public sCity;

  saveDataAndCloseDialog(): void {
    this.dialogRef1.close(this.sCity);
  }

  cancelDialog() {
    this.dialogRef1.close();
  }

  onCityChk() {
    $('.state-chk-boxes .custom-number-input').hide();

    // console.log($('.theme-boxes :checkbox:checked'));
    var checkedChk = $('.state-chk-boxes :checkbox:checked');
    var sCity = checkedChk
      .map(function () {

        $(this).closest('.city-state-list-text').find('.custom-number-input').show();
        // var newVal = this.value + ""
        return this.value;
      })
      .get()
      .join('|');
    this.sCity = sCity;
    // console.log(sCity)

    // this.setLocalStorage('holiday_type', sTheme);
  }


  _bindCustomNumberInput(dom) {
    let _this = this;
    // _this.setLocalStorage('duration', 1);
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

        if (newVal == 0) {
          btnDown.addClass('first-digit');
        } else {
          btnDown.removeClass('first-digit');
        }

        // _this.setLocalStorage('duration', input.val());

      });

      btnDown.click(function () {
        // console.log(parseFloat(input.val()));
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          // var newVal = oldValue - 1;
          if (oldValue == 0) {
            newVal = oldValue;

          } else {
            newVal = oldValue - 1;
          }
        }

        if (newVal == 0) {
          btnDown.addClass('first-digit');
        } else {
          btnDown.removeClass('first-digit');

        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
        // _this.setLocalStorage('duration', input.val());
      });

    });
  }

}

@Component({
  selector: 'india-city-dialog',
  templateUrl: 'dialog-state-example-dialog.html',
})


export class PostRequestStateLiveDialog {
  constructor(
    public dialogRef2: MatDialogRef<PostRequestStateLiveDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);

    var aExistingCitys = this.data.sCity.split('|');
    console.log(aExistingCitys);

    aExistingCitys.forEach(sCity => {
      console.log(sCity)
      var aCheckbox = $('.state-chk-boxes :checkbox');
      // console.log(aCheckbox);    

      for (var index = 0; index < aCheckbox.length; ++index) {
        // console.log(aCheckbox[index].value == sCity);
        if (aCheckbox[index].value == sCity) {
          $(aCheckbox[index]).attr('checked', 'checked');
        }
      }
    });


    //////////////////////////

    let plusMinusDiv = $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down first-digit">-</div></div>');
    plusMinusDiv.insertAfter('input.duration-days-input');

    var $customnumnerInput = $('.custom-number-input');
    this._bindCustomNumberInput($customnumnerInput);

    setTimeout(function () {
      // $('.city-state-list-text :checkbox').prop('checked')
      $('.state-chk-boxes .custom-number-input').hide();
    }, 100);

  }

  public sCity;

  saveDataAndCloseDialog(): void {
    this.dialogRef2.close(this.sCity);
  }

  cancelDialog() {
    this.dialogRef2.close();
  }

  onCityChk() {
    $('.state-chk-boxes .custom-number-input').hide();

    // console.log($('.theme-boxes :checkbox:checked'));
    var checkedChk = $('.state-chk-boxes :checkbox:checked');
    var sCity = checkedChk
      .map(function () {

        $(this).closest('.city-state-list-text').find('.custom-number-input').show();
        // var newVal = this.value + ""
        return this.value;
      })
      .get()
      .join('|');
    this.sCity = sCity;
    // console.log(sCity)

    // this.setLocalStorage('holiday_type', sTheme);
  }

  _bindCustomNumberInput(dom) {
    let _this = this;
    // _this.setLocalStorage('duration', 1);
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

        if (newVal == 0) {
          btnDown.addClass('first-digit');
        } else {
          btnDown.removeClass('first-digit');
        }

        // _this.setLocalStorage('duration', input.val());

      });

      btnDown.click(function () {
        // console.log(parseFloat(input.val()));        
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          // var newVal = oldValue - 1;
          if (oldValue == 0) {
            newVal = oldValue;

          } else {
            newVal = oldValue - 1;
          }
        }

        if (newVal == 0) {
          btnDown.addClass('first-digit');
        } else {
          btnDown.removeClass('first-digit');

        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
        // _this.setLocalStorage('duration', input.val());
      });

    });
  }

}


@Component({
  selector: 'app-post-request-live',
  templateUrl: './post-request-live.component.html',
  styleUrls: ['./post-request-live.component.css']
})
export class PostRequestLiveComponent implements OnInit {

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
    // let _this = this;
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

      // this._bindDatePicker($datePickerDom1);
      // this._bindDatePicker($datePickerDom2);
      // this._bindMonthPicker($monthPickerDom);

      // var $budgetSlider = $('.custom-budget-slider #budgetSlider');
      // var $minValueDom = $('.custom-budget-slider .minValue');
      // var $maxValueDom = $('.custom-budget-slider .maxValue');
      // this._bindBudgetSlider($budgetSlider, $minValueDom, $maxValueDom);

      // 
      let localTravelType = window.localStorage.getItem('travel_type')
      if (localTravelType == 'India') {
        this.showRegion = false;
      } else {
        this.showRegion = true;
      }

    }, 100);
    
    
    
    // $('.post-request-step .slick-list').addClass('abcd');
    // $('.post-request-step .slick-list').css("height", "500px !important")
    // $('.post-request-step .slick-list').css("color", "#f00")
    this.setLocalStorage('living_country', this.living_country);
    this.setLocalStorage('same_city', this.same_city);
    this.setLocalStorage('adult_count', this.adult_count);
    this.setLocalStorage('children_count', this.children_count);
    this.setLocalStorage('infant_count', this.infant_count);
    this.setLocalStorage('senior_citizen_count', this.senior_citizen_count);
    
    this._bindContrySelectChange();
    this._bindTravelToValue();
    this._bindLivingCityValue();
    this._bindDepartureCityValue();
    this._bindAdultInput();
    this._bindChildrenInput();
    this._bindInfantsInput();
    this._bindSeniorInput();
  }

  public showRegion = false;

  // public selectedDestination = 'india';
  // public minDate = new Date(2017, 9, 1);
  // public maxDate = new Date(2017, 11, 31);

  public foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  public seasons = [
    'Close to city center (may be expensive)',
    'Away from city center',
    'Near train station',
    'Near airport',
  ];

  public isLinear = false;
  public sCity = '';
  public sCityOnPage = '';
  public sCityFromModal = '';
  public living_country = 'India';
  public same_city = false;
  public adult_count = 0;
  public children_count = 0;
  public infant_count = 0;
  public senior_citizen_count = 0;

  // selectTravelDestination(travelArea, el) {
  //   // console.log(travelArea);
  //   // console.log(el);
  //   // this.selectedDestination = travelArea;
  // }

  _bindContrySelectChange(){
    let _this = this
    $('#living_country').change(function () {
      // console.log(this);
      var sVal = $(this).find('>option:selected').text();
      console.log(sVal);

      _this.setLocalStorage('living_country', sVal);
    })
  }

  startdateSelected() {
    console.log(arguments);
  }

  _bindBudgetSlider(dom, minVlaue, maxValue) {
    dom.slider({
      min: 10000,
      max: 100000,
      step: 1,
      values: [10000, 100000],
      slide: function (event, ui) {
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

        if (newVal == 0) {
          btnDown.addClass('first-digit');
        } else {
          btnDown.removeClass('first-digit');
        }


      });

      btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        // if (oldValue <= min) {
        //   var newVal = oldValue;
        // } else {
        //   var newVal = oldValue - 1;
        // }

        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          // var newVal = oldValue - 1;
          if (oldValue == 0) {
            newVal = oldValue;

          } else {
            newVal = oldValue - 1;
          }
        }

        if (newVal == 0) {
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
    console.log(dom);
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

  setLocalStorage(key, val) {
    window.localStorage.setItem(key, val);
  }

  // height:'800px',
  openCountryDialog() {
    let dialogRef = this.dialog.open(PostRequestCountryLiveDialog, {
      width: '800px',
      data: {
        sCity: this.sCityFromModal
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result);

      var checkedChk = $('.popularTrips :checkbox');

      console.log(result);

      if (result == undefined || result == true) {
        return;
      } else {
        this.sCityFromModal = result;
        this.mergeWithExistingCity();
      }

    });

  }

  _bindTravelToValue() {
    let _this = this
    // console.log($('.brief-text-other .others_desc'))
    $('.brief-text-other .living_city').on('input', function () {
      // console.log(this.value);
      _this.setLocalStorage('living_city', this.value);
    })
  }

  _bindLivingCityValue() {
    let _this = this
    // console.log($('.brief-text-other .others_desc'))
    $('.brief-text-other .travel_to').on('input', function () {
      // console.log(this.value);
      _this.setLocalStorage('travel_to', this.value);
    })
  }

  _bindDepartureCityValue() {
    let _this = this
    // console.log($('.brief-text-other .others_desc'))
    $('.brief-text-other .departure_city').on('input', function () {
      // console.log(this.value);
      _this.setLocalStorage('departure_city', this.value);
    })
  }
  _bindAdultInput(){
    let _this = this
    console.log($('.adults .duration-days-input'))
    $('.adults .duration-days-input').on('change', function () {
      console.log(this.value);
      _this.setLocalStorage('adult_count', this.value);
      
      // _this.setLocalStorage('departure_city', this.value);
    })
  }

  _bindChildrenInput() {
    let _this = this
    console.log($('.children .duration-days-input'))
    $('.children .duration-days-input').on('change', function () {
      console.log(this.value);
      _this.setLocalStorage('children_count', this.value);
      
      // _this.setLocalStorage('departure_city', this.value);
    })
  }

  _bindInfantsInput() {
    let _this = this
    console.log($('.infants .duration-days-input'))
    $('.infants .duration-days-input').on('change', function () {
      console.log(this.value);
      _this.setLocalStorage('infant_count', this.value);
      
      // _this.setLocalStorage('departure_city', this.value);
    })
  }

  _bindSeniorInput() {
    let _this = this
    console.log($('.senior .duration-days-input'))
    $('.senior .duration-days-input').on('change', function () {
      console.log(this.value);
      _this.setLocalStorage('senior_citizen_count', this.value);
      
      // _this.setLocalStorage('departure_city', this.value);
    })
  }

  onCityChk() {
    // $('.popularTrips .custom-number-input').hide();

    // console.log($('.theme-boxes :checkbox:checked'));
    // console.log($('.popularTrips :checkbox:checked'));
    var checkedChk = $('.popularTrips :checkbox:checked');
    var sCity = checkedChk
      .map(function () {

        // $(this).closest('.city-state-list-text').find('.custom-number-input').show();
        // var newVal = this.value + ""
        return this.value;
      })
      .get()
      .join('|');

    this.sCityOnPage = sCity;

    this.mergeWithExistingCity();
    // console.log(sCity);

    // this.setLocalStorage('holiday_type', sTheme);
  }

  onSameCity() {
    let isChecked = $('input[type="checkbox"].same_city').is(':checked');
    this.setLocalStorage('same_city', isChecked);
    // window.localStorage.setItem('flexible_date', isChecked);
  }

  // height:'800px',
  openStateDialog() {
    let dialogRef = this.dialog.open(PostRequestStateLiveDialog, {
      width: '800px',
      data: {
        sCity: this.sCityFromModal
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(`Dialog result: ${result}`);
      var checkedChk = $('.popularTrips :checkbox');

      console.log(result);

      if (result == undefined || result == true) {
        return;
      } else {
        this.sCityFromModal = result; 
        this.mergeWithExistingCity();
      }
    });
  }

  mergeWithExistingCity() {
    var aExistingCitys = this.sCityOnPage.split('|');
    var aCityFrommodal = this.sCityFromModal.split('|');

    var finalArray = $.merge(aExistingCitys, aCityFrommodal);

    var uniqueNames = [];
    $.each(finalArray, function (i, el) {
      if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });

    console.log(uniqueNames);
    this.sCity = uniqueNames.join('|');

    this.setLocalStorage('travel_to_cities', this.sCity);
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
        // console.log($(slider.$list).find('.slick-track'))
        $(slider.$list).find('.slick-track').css("transform", 'translate3d(0px, 0px, 0px)');
      }
    };

    dom.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      // console.log(event, slick, currentSlide, nextSlide);
      // afterChange(slick, nextSlide)
    });

    dom.on('afterChange', function (event, slick, currentSlide) {
      // console.log(event, slick, currentSlide);
      afterChange(slick, currentSlide)
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
      // console.log($aLi.filter("li.current").prevAll());

      $aLi.filter("li.current").prevAll().css('background-color', '#5a7ded !important')
    }, 0);
  }

}


