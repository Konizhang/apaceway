 function initMap() {
        var toronto = {lat: 43.653226, lng:-79.38318429999998};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: toronto
        });
//        var marker = new google.maps.Marker({
//          position: uluru,
//          map: map
//        });
      }

$(document).ready(function(){
    
    
    var language = window.navigator.userLanguage || window.navigator.language;

   // alert(language); //zh-CN
    var defaultLang = "en";
    if(language.includes("CN")){
        var defaultLang = "cn"; 
    }
       defaultLang = "en";  
            $("[i18n]").i18n({
                defaultLang: defaultLang,
                filePath: "i18n/",
                filePrefix: "i18n_",
                fileSuffix: "",
                forever: true,
                callback: function() {
                    console.log("i18n has been completed.");
                }
            });
            /*切换为中文 - 按钮*/
            $(".chinese").click(function() {
                $("[i18n]").i18n({
                    defaultLang: "cn",
                });
            });
            /*切换为英文 - 按钮*/
            $(".english").click(function() {
                $("[i18n]").i18n({
                    defaultLang: "en",
                });
            });

    
    
    
   
    $(window).scroll(function(){
        
        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('fixed-top').addClass('navbar-darkp').addClass('bg-dark').addClass('fixposition');
        }
        if ($(window).scrollTop() < 971) {
            $('.navbar').removeClass('fixed-top').removeClass('navbar-darkp').removeClass('bg-dark');
        }
        
    });  
});


$("#navbarResponsive ul li a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

    console.log(hash);
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){
       window.location.hash = hash;
     });

});


$("#section-parallax .col-sm-8 a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       window.location.hash = hash;
     });

});

$(".footer .scroll-to-top-button a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       window.location.hash = hash;
     });

});



$('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeInDown');
}, {
    offset: '50%'
});


$('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeInRight');
}, {
    offset: '50%'
});

$('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animated fadeInUp');
}, {
    offset: '50%'
});



$('.slider_custom').waypoint(function(direction) {
    $('.slider_custom').addClass('animated fadeInRight');
}, {
    offset: '10%'
});

$('.slider_freight').waypoint(function(direction) {
    $('.slider_freight').addClass('animated fadeInRight');
}, {
    offset: '10%'
});


//
//$(window).load(function() { // makes sure the whole site is loaded
//  "use strict";
//
//  /* ==============================================
//      Menu toggle
//    =============================================== */ 
//    $(window).bind('scroll', function() {
//        var navHeight = $(window).height() - 40;
//        if ($(window).scrollTop() > navHeight) {
//            $('.navbar-default').addClass('on');
//            console.log(1);
//        } else {
//            $('.navbar-default').removeClass('on');
//            console.log(2);
//        }
//    });
//
//    $('body').scrollspy({ 
//        target: '.navbar-default',
//        offset: 70
//    })
// 
//
//});






































