var isMobile = false,
    scrollTopPosition;
function getBrowser() {
    var ua = navigator.userAgent;
    var bName = function () {
        if (ua.search(/Edge/) > -1) return "edge";
        if (ua.search(/MSIE/) > -1) return "ie";
        if (ua.search(/Trident/) > -1) return "ie11";
        if (ua.search(/Firefox/) > -1) return "firefox";
        if (ua.search(/Opera/) > -1) return "opera";
        if (ua.search(/OPR/) > -1) return "operaWebkit";
        if (ua.search(/YaBrowser/) > -1) return "yabrowser";
        if (ua.search(/Chrome/) > -1) return "chrome";
        if (ua.search(/Safari/) > -1) return "safari";
        if (ua.search(/maxHhon/) > -1) return "maxHhon";
    }();
                                                                                                                                                                      
    var version;
    switch (bName) {
        case "edge":
            version = (ua.split("Edge")[1]).split("/")[1];
            break;
        case "ie":
            version = (ua.split("MSIE ")[1]).split(";")[0];
            break;
        case "ie11":
            bName = "ie";
            version = (ua.split("; rv:")[1]).split(")")[0];
            break;
        case "firefox":
            version = ua.split("Firefox/")[1];
            break;
        case "opera":
            version = ua.split("Version/")[1];
            break;
        case "operaWebkit":
            bName = "opera";
            version = ua.split("OPR/")[1];
            break;
        case "yabrowser":
            version = (ua.split("YaBrowser/")[1]).split(" ")[0];
            break;
        case "chrome":
            version = (ua.split("Chrome/")[1]).split(" ")[0];
            break;
        case "safari":
            version = ua.split("Safari/")[1].split("")[0];
            break;
        case "maxHhon":
            version = ua.split("maxHhon/")[1];
            break;
    }
    var platform = 'desktop';
    if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile';
    var browsrObj;
    try {
        browsrObj = {
            platform: platform,
            browser: bName,
            versionFull: version,
            versionShort: version.split(".")[0]
        };
    } catch (err) {
        browsrObj = {
            platform: platform,
            browser: 'unknown',
            versionFull: 'unknown',
            versionShort: 'unknown'
        };
    }
    return browsrObj;
}
var browserYou = getBrowser();
if (browserYou.platform == 'mobile') { isMobile = true;document.documentElement.classList.add('mobile')}else {document.documentElement.classList.add('desktop')}
if ((browserYou.browser == 'ie')) {document.documentElement.classList.add('ie');}
if ((browserYou.browser == 'ie' &&  browserYou.versionShort < +'9') || ((browserYou.browser == 'opera' || browserYou.browser == 'operaWebkit') && browserYou.versionShort < +'18') || (browserYou.browser == 'firefox' &&  browserYou.versionShort < +'30')) {
    alert('Обновите браузер','')
}
window.addEventListener('DOMContentLoaded',function(){
  // PRELOADER
  var body = document.querySelector('body');
  body.classList.add('loading');
  if (isMobile === true) {body.parentNode.classList.add('mobile'); }
  setTimeout(function(){body.classList.add('loaded')},1000);
  setTimeout(function(){document.querySelector('.preloader').style.display = 'none';},1500);
  // //PRELOADER
});
window.onload = function() {
  var swiper = new Swiper('.main-slider', {
      loop:true,
      autoplay: 2000,
      speed: 1500,
      parallax:true,
      slidesPerView: 1
  });

  var swiper2 = new Swiper('.our-partners-sld .swiper-container', {
      nextButton: ".our-partners-slider .swiper-button-next",
      prevButton: ".our-partners-slider .swiper-button-prev",
       slidesPerView: 4,
       breakpoints: {
           600: {
               slidesPerView: 1,
           },
           767: {
               slidesPerView: 2,
           },
           1023: {
               slidesPerView: 3,
           },
           1200: {
               slidesPerView: 4,
           }
       }
  });
  var swiper3 = new Swiper('.soldier-slider .swiper-container', {
      loop:true,
      slidesPerView: 1,
      nextButton: ".soldier-slider .swiper-button-next",
      prevButton: ".soldier-slider .swiper-button-prev",
      onSlideChangeEnd: function (swiper) {
        var indexActive = $('.swiper-slide-active').data("index-slider");
        $(".counter-slider .active-slider").text(indexActive)
      }
  });
  if(browserYou.browser == 'ie' &&  browserYou.versionShort == +'9') {
    var swiper3 = new Swiper('.soldier-slider .swiper-container', {
        nextButton: ".soldier-slider .swiper-button-next",
        prevButton: ".soldier-slider .swiper-button-prev",
    });
    $('.counter-slider').hide();
  }
  if(document.querySelector('.soldier-slider')) {
    $('.counter-slider .total-sldier').text(swiper3.slides.length - 2)
  }
  if($('.mission-slider-images').length) {
    $('.mission-slider-images .mission-sld').each(function(i,item){
      var swiper = new Swiper($(item).find('.swiper-container'), {
          loop:true,
          autoplay: Math.random()*3000,
          speed: 1000,
          slidesPerView: 1,
          effect: 'fade'
      });
    });
  }
  // mobile menu
  document.querySelector('.js_open_mob_menu').addEventListener('click',function(){
    document.querySelector('.mobile-menu').style.display = 'block';
    document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    document.body.classList.add('noscroll');
    document.querySelector('.hamburger--collapse').classList.add('is-active');
    setTimeout(function(){document.querySelector('.mobile-menu').className = 'mobile-menu visible vis-li'},200);
  })
  document.querySelector('.js_close_mob_nav').addEventListener('click',function(){
    document.querySelector('.mobile-menu').classList.remove('vis-li');
    document.querySelector('.hamburger--collapse').classList.remove('is-active');
    setTimeout(function(){
        document.querySelector('.mobile-menu').classList.remove('visible');
        document.body.classList.remove('noscroll');
        document.body.style.paddingRight = 0;
    },1000);
    setTimeout(function(){document.querySelector('.mobile-menu').style.display = 'none'},1500);
  });
  // mobile menu
  // map
  if(document.getElementById('#map') !== undefined) {
      initialize()
  }
  // map
  // document scroll to
  if(document.querySelector('[data-scroll]') !== undefined) {
    document.addEventListener('click',function(e){
      var elmentClick = e.target,
          elementScrollTo = elmentClick.getAttribute('data-scroll-to');
          elmentParent = elmentClick.parentNode;

      if(elmentClick.hasAttribute('data-scroll') === true) {
        scrollTo(document.body, document.getElementById(elementScrollTo).offsetTop + document.querySelector('.parent-scroll-element').offsetTop - 55, 500);
        e.preventDefault();
      }
    });
  }
  // document scroll to
  scrollTopPosition = currentScrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  if(scrollTopPosition > 200) {
    document.querySelector('.header').classList.add('fix')
  }
  if(document.querySelector('.map-window') !== undefined) {
    document.querySelector('.js_map-close').addEventListener('click',function(){
      document.querySelector('.map-window').classList.remove('visible');
    })
  }
  if(document.querySelector('.map-nav-tab__nav') !== undefined) {
    document.querySelector('.map-nav-tab__nav').addEventListener('click',function(e){
      var target = e.target;
      if(target.className.search('view-map') > -1 ) {
        document.querySelector('.map-nav-tab__nav .view-list').classList.remove('active');
        document.querySelector('.map-page').classList.remove('view-list');
        document.querySelector('.map-page').classList.add('view-map');
        target.classList.add('active');
      }
      if(target.className.search('view-list') > -1) {
        document.querySelector('.map-nav-tab__nav .view-map').classList.remove('active');
        document.querySelector('.map-page').classList.remove('view-map');
        document.querySelector('.map-page').classList.add('view-list');
        target.classList.add('active');
      }
    })
  }
}
window.onresize = function() {
  if(document.querySelector('.js_height') !== undefined) {
    heightBlock('.js_height')
  }
  
}
var delta,
    tempScrollTop,
    currentScrollTop = 0;
window.onscroll = function() {
  scrollTopPosition = currentScrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  if (tempScrollTop < currentScrollTop ){
    delta = false
  }
  else if (tempScrollTop > currentScrollTop ){
    delta = true
  }
  tempScrollTop = currentScrollTop;
  if(scrollTopPosition > 100) {
    if (delta === true) {
      document.querySelector('.header').classList.add('fix')
      document.querySelector('.header').classList.add('visible')
    } else {
      document.querySelector('.header').classList.remove('visible')
      document.querySelector('.header').classList.add('fix')
    }
  } else {
    document.querySelector('.header').classList.remove('fix')
    document.querySelector('.header').classList.remove('visible')
  }
}
function scrollTo(element, to, duration) {
    var start = element.scrollTop ;
    if(browserYou.browser == 'firefox') {
      start = document.documentElement.scrollTop
    }
    var change = to - start,
        currentTime = 0,
        increment = 20,
        scrollTopPosition = document.documentElement.scrollTop ;
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(browserYou.browser == 'firefox') {
          document.documentElement.scrollTop = val;
        }
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
var stylesArray = [
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#0154c5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#003175"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#003175"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#003175"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];
var zoomMap,
    winW = window.innerWidth;
if( winW > 1400) {
  zoomMap = 7
}
if( winW < 1400) {
  zoomMap = 6
} else if( winW < 1023){
  zoomMap = 4
}
function initialize() {
  var myLatlng = new google.maps.LatLng(49.639177, 31.629639);
  var myCenter = new google.maps.LatLng(49.639177, 31.629639);
  var mapOptions = {
    zoom: zoomMap,
    center: myCenter,
    scrollwheel: false,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles:stylesArray,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    streetViewControl: false
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var markers = [ 
    {
      latLng:[50.555325, 26.520997], 
      options:{
        icon: "images/marker.png",
        date: '22.01.16',
        iconDon: "assets/images/part1.jpg",
        nameArea: 'Приват Банк',
        peopleList:'Vasya, Люк Бессонов , Petya, Sergey'
      }
    },
    {
      latLng:[48.676453, 31.201172],
      options:{
        icon: "images/marker.png",
        date: '22.10.16',
        iconDon: "assets/images/part2.jpg",
        nameArea: 'Альфа Банк',
        peopleList:' Александр Лойко, Vasya, Petya, Sergey'
      }
    },
    {
      latLng:[49.368066, 36.254883], 
      options:{
        icon: "images/marker.png",
        date: '17.05.16',
        iconDon: "assets/images/part3.jpg",
        nameArea: 'Укрсоц Банк',
        peopleList:'Виктор Бойко, Petya, Sergey'
      }
    },
    {
      latLng:[49.396675, 25.532227], 
      options:{
        icon: "images/marker.png",
        date: '17.05.16',
        iconDon: "assets/images/part3.jpg",
        nameArea: 'Укрсоц Банк',
        peopleList:'Виктор Бойко, Petya, Sergey'
      }
    },
    {
      latLng:[49.752880, 30.761719], 
      options:{
        icon: "images/marker.png",
        date: '17.05.16',
        iconDon: "assets/images/part3.jpg",
        nameArea: 'Укрсоц Банк',
        peopleList:'Виктор Бойко, Petya, Sergey'
      }
    }
  ];
  for(i in markers) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(markers[i].latLng[0],markers[i].latLng[1]),
          map: map,
          preserveViewport: false,
          icon: markers[i].options['icon'],
          dateItem: markers[i].options['date'],
          iconDon:markers[i].options['iconDon'],
          nameArea:markers[i].options['nameArea'],
          peopleList:markers[i].options['peopleList']
        });
        // marker_cluster.push(marker);
        google.maps.event.addListener(marker, 'click',(function(marker, i) {
          return function(){
            var iconDon = marker.iconDon,
                nameArea = marker.nameArea,
                peopleList = marker.peopleList,
                dateItem = marker.dateItem;
            document.querySelector('.map-area .map-window').classList.add('visible');
            document.querySelector('.map-area .map-window .icon-area').setAttribute('src',iconDon);
            document.querySelector('.map-area .map-window .name-area').innerHTML = nameArea;
            document.querySelector('.map-area .map-window .date-mp').innerHTML = dateItem;
            document.querySelector('.map-area .map-window .help-us span').innerHTML = peopleList;
          };
        })(marker,i) );      
      }
}
function heightBlock(ell){
  var elem = document.querySelectorAll(ell);
  var maxH = 0;
  for (var i = 0; i < elem.length; ++i) {
    elem[i].style.height = "";
    elem[i].removeAttribute("style");
    if (maxH < elem[i].offsetHeight) {
      maxH = elem[i].offsetHeight; 
    }
    elem[i].style.height = maxH + "px";
  }
}
$(window).resize(function(){

});
$(window).load(function(){
  if(document.querySelector('.js_height') !== undefined) {
    heightBlock('.js_height')
  }
});
$(document).ready(function() {
  // light gallery
  $('#lightgallery').lightGallery();
  // light gallery
  // collapse
  $('input[data-validate="phone"]').mask("+380(99)999 99 99"); 
  $('.help-us-item__txt').liTextLength({
      length: 150,        
      afterLength: '...',         
      fullText:false
  });
  $('.map-window-txt').liTextLength({
      length: 150,        
      afterLength: '...',         
      fullText:false
  });
  $('.js_validate button[type="submit"]').on("click", function(){
    return validate($(this).parent(".js_validate"));
  }); 
  $('.dropdown-button').dropdown();
  $('ul.tabs').tabs();
  $('select').not('.my_select_box').material_select();
  $('.collapsible').collapsible();
  $('.modal').modal({
      opacity: 1
  });
});
// validate form
function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    var email       = false;
    var password    = false;
    var phone       = false;
    function mark (object, expression) {
        if (expression) {
            object.parents('.required-field').addClass(error_class).removeClass(norma_class);
            e++;
        } else
            object.parents('.required-field').addClass(norma_class).removeClass(error_class);
    }
    form.find("[required]").each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length === 0);
            break;
            case "email":
                email = true;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                email = false;
            break;
            case "phone":
                phone = true;
                reg = /[0-9 -()+]{10}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                phone = false;
            break;
            case "pass":
                password = true;
                reg = /^[a-zA-Z0-9_-]{6,}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                password = false;
            break;
            case "pass1":
                mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
        }
    })
    $('.js_valid_radio').each(function(){
        var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
            if ($(inp[i]).is(':checked') === true) {
                rezalt = 1;
                break;
            } else {
                rezalt = 0;
            }
        }
        if (rezalt === 0) {
           $(this).addClass(error_class).removeClass(norma_class);
            e=1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e === 0) {
     return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
}
// validate form 
//textoverflow
jQuery.fn.liTextLength = function(options){
  // настройки по умолчанию
  var o = jQuery.extend({
      length: 150,                                    //Видимое кол-во символов
      afterLength: '...',                                //Текст после видимого содержания        
      fullText:true,                                    //Добавить ссылку для отображения скрытого текста
      moreText: '<br>полный&nbsp;текст',                //Текст ссылки до показа скрытого содержания
      lessText: '<br>скрыть&nbsp;полный&nbsp;текст'    //Текст ссылки после показа скрытого содержания
  },options);
  return this.each(function(){
      var 
      $el = $(this),
      elText = $.trim($el.text()),
      elLength = elText.length;
      if(elLength > o.length){ 
          var 
          textSlice = $.trim(elText.substr(0,o.length)),
          textSliced = $.trim(elText.substr(o.length));
          if(textSlice.length < o.length){
              var 
              textVisible = textSlice,
              textHidden = $.trim(elText.substr(o.length));
          }else{    
              var 
              arrSlice = textSlice.split(' '),
              popped = arrSlice.pop(),
              textVisible = arrSlice.join(' ') + ' ',
              textHidden = popped + textSliced  + ' ';
          }
          var 
          $elTextHidden = $('<span>').addClass('elTextHidden').html(textHidden),
          $afterLength = $('<span>').addClass('afterLength').html(o.afterLength + ' '),
          $more = $('<span>').addClass('more').html(o.moreText);
          $el.text(textVisible).append($afterLength).append($elTextHidden);
          var displayStyle = $elTextHidden.css('display');
          $elTextHidden.hide();
          if(o.fullText){
              $el.append($more);
              $more.click(function(){
                  if($elTextHidden.is(':hidden')){
                      $elTextHidden.css({display:displayStyle})    ;
                      $more.html(o.lessText);
                      $afterLength.hide();
                  }else{
                      $elTextHidden.hide();
                      $more.html(o.moreText);
                      $afterLength.show();
                  }
                  return false;
              });
          }else{
              $elTextHidden.remove();
          }
      }
  });
};
