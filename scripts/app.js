$("#underscore").hide();
$("main").hide();
$(".site-nav").hide();

let i = 0;
let siteOpen = "hello world";
const speed = 60;

function typing() {
  if (i < siteOpen.length) {
    document.getElementById("hello-world").innerHTML += siteOpen.charAt(i);
    i++;
    setTimeout(typing, speed);
  };
};

typing();
$("#underscore").delay(700).fadeIn(300).fadeOut(300);
$("#underscore").delay(500).fadeIn(300).fadeOut(300);
$("#underscore").delay(500).fadeIn(300).fadeOut(300);
$(".site-open").delay(3400).fadeOut(300);

$("main").delay(3800).fadeIn(800);
$(".site-nav").delay(5800).slideDown(200);
$(".site-nav").delay(2000).slideUp(200);



$(window).ready(function() {
  if($(this).width() <= 570) {
    $(".experience-page").css({ "height": "180px" });
    $(".experience-home-snippet").hide();
    $(".experience-home-tab").hide();
    $(".experience-contents").hide();


    $(".work-page").css({ "height": "120px" });
    $(".work-home-snippet").hide();
    $(".work-home-tab").hide();
    $(".work-contents").hide();


    $(".contact-page").css({ "height": "60px" });
    $(".contact-home-snippet").hide();
    $(".contact-home-tab").hide();
    $(".contact-contents").hide();

  } else {

    $(".experience-page").css({ "width": "60px" });
    $(".experience-home-snippet").hide();
    $(".experience-home-tab").hide();
    $(".experience-contents").hide();


    $(".work-page").css({ "height": "60px" });
    $(".work-home-snippet").hide();
    $(".work-home-tab").hide();
    $(".work-contents").hide();


    $(".contact-page").css({ "width": "60px" });
    $(".contact-home-snippet").hide();
    $(".contact-home-tab").hide();
    $(".contact-contents").hide();

  };
});
  

  


let $windowSize;
$(window).resize(function() {
  $windowSize = $(window).width();
  if($windowSize <= 570) {

    // if on homepage
    if($(".about").is(":visible")) {
      $(".experience-page").css({ "height": "180px" });
      $(".experience-page").css({ "width": "100vw" });
      $(".experience-home-tab").css({ "height": "10vh" });
      $(".experience-home-tab").css({ "width": "100vw" });
      $(".work-page").css({ "height": "120px" });
      $(".work-page").css({ "width": "100vw" });
      $(".work-home-tab").css({ "height": "10vh" });
      $(".work-home-tab").css({ "width": "100vw" });
      $(".contact-page").css({ "height": "60px" });
      $(".contact-page").css({ "width": "100vw" });
      $(".contact-home-tab").css({ "height": "10vh" });
      $(".contact-home-tab").css({ "width": "100vw" });
    }

    // if on experience page
    if($(".experience-contents").is(":visible")) {
      $(".experience-home-snippet").hide();
      $(".experience-page").css({ "height": "100vh" });
      $(".experience-page").css({ "width": "100vw" });
      $(".experience-home-tab").css({ "height": "10vh" });
      $(".experience-home-tab").css({ "width": "100vw" });
    }

    // if on work page
    if($(".work-contents").is(":visible")) {
      $(".work-home-snippet").hide();
      $(".work-page").css({ "height": "100vh" });
      $(".work-page").css({ "width": "100vw" });
      $(".work-home-tab").css({ "height": "10vh" });
      $(".work-home-tab").css({ "width": "100vw" });
    }

    // if on contact page
    if($(".contact-contents").is(":visible")) {
      $(".contact-home-snippet").hide();
      $(".contact-page").css({ "height": "100vh" });
      $(".contact-page").css({ "width": "100vw" });
      $(".contact-home-tab").css({ "height": "10vh" });
      $(".contact-home-tab").css({ "width": "100vw" });
    }

  } else {

    // if on homepage
    if($(".about").is(":visible")) {
      $(".experience-page").css({ "height": "100vh" });
      $(".experience-page").css({ "width": "60px" });
      $(".experience-home-tab").css({ "height": "100vh" });
      $(".experience-home-tab").css({ "width": "45px" });
      $(".work-page").css({ "height": "60px" });
      $(".work-page").css({ "width": "100vw" });
      $(".work-home-tab").css({ "height": "40px" });
      $(".work-home-tab").css({ "width": "100vw" });
      $(".contact-page").css({ "height": "100vh" });
      $(".contact-page").css({ "width": "60px" });
      $(".contact-home-tab").css({ "height": "100vh" });
      $(".contact-home-tab").css({ "width": "45px" });
    }

    // if on experience page
    if($(".experience-contents").is(":visible")) {
      $(".experience-home-snippet").show();
      $(".experience-page").css({ "height": "100vh" });
      $(".experience-page").css({ "width": "75vw" });
      $(".experience-home-tab").css({ "height": "100vh" });
      $(".experience-home-tab").css({ "width": "45px" });
    }

    // if on work page
    if($(".work-contents").is(":visible")) {
      $(".work-home-snippet").show();
      $(".work-page").css({ "height": "80vh" });
      $(".work-page").css({ "width": "100vw" });
      $(".work-home-tab").css({ "height": "40px" });
      $(".work-home-tab").css({ "width": "100vw" });
    }

    // if on contact page
    if($(".contact-contents").is(":visible")) {
      $(".contact-home-snippet").show();
      $(".contact-page").css({ "height": "100vh" });
      $(".contact-page").css({ "width": "75vw" });
      $(".contact-home-tab").css({ "height": "100vh" });
      $(".contact-home-tab").css({ "width": "45px" });
    }

  };
});




$(".experience-tab").on("click", function () {
  if($(window).width() <= 570) {
    $(".about").fadeOut(500);
    $(".work-page").fadeOut(500);
    $(".contact-page").fadeOut(500);
    $(".experience-page").animate({ "height": "100vh" }, 700);
    $(".experience-contents").delay(200).fadeIn(500);
    $(".experience-tab").delay(300).fadeOut(300);
    $(".experience-home-tab").delay(300).fadeIn(300);
  } else {
    $(".about").fadeOut(600);
    $(".work-page").fadeOut(600);
    $(".contact-page").fadeOut(600);
    $(".experience-page").animate({ "width": "75vw" }, 700);
    $(".experience-contents").delay(200).fadeIn(500);
    $(".experience-tab").delay(300).fadeOut(300);
    $(".experience-home-tab").delay(300).fadeIn(300);
    $(".experience-home-snippet").delay(400).fadeIn(500);
  }
  
});

$(".experience-home-tab").on("click", function () {
  if($(window).width() <= 570) {
    $(".work-page").css({ "height": "120px" });
    $(".work-page").css({ "width": "100vw" });
    $(".contact-page").css({ "height": "60px" });
    $(".contact-page").css({ "width": "100vw" });
    
    $(".experience-contents").fadeOut(700);
    $(".experience-page").animate({ "height": "180px" }, 700);
    $(".experience-home-tab").delay(300).fadeOut(300);
    $(".experience-tab").delay(300).fadeIn(300);
    $(".contact-page").delay(400).fadeIn(700);
    $(".work-page").delay(400).fadeIn(700);
    $(".about").delay(400).fadeIn(700);

    $(".experience-home-tab").css({ "height": "10vh" });
    $(".experience-home-tab").css({ "width": "100vw" });
    $(".work-home-tab").css({ "height": "10vh" });
    $(".work-home-tab").css({ "width": "100vw" });
    $(".contact-home-tab").css({ "height": "10vh" });
    $(".contact-home-tab").css({ "width": "100vw" });

  } else {

    $(".work-page").css({ "height": "60px" });
    $(".work-page").css({ "width": "100vw" });
    $(".contact-page").css({ "height": "100vh" });
    $(".contact-page").css({ "width": "60px" });

    $(".experience-home-snippet").delay(100).fadeOut(600);
    $(".experience-contents").fadeOut(700);
    $(".experience-page").animate({ "width": "60px" }, 700);
    $(".experience-home-tab").delay(300).fadeOut(300);
    $(".experience-tab").delay(300).fadeIn(300);
    $(".contact-page").delay(400).fadeIn(700);
    $(".work-page").delay(300).fadeIn(700);
    $(".about").delay(300).fadeIn(700);

    $(".experience-home-tab").css({ "height": "100vh" });
    $(".experience-home-tab").css({ "width": "45px" });
    $(".work-home-tab").css({ "height": "40px" });
    $(".work-home-tab").css({ "width": "100vw" });
    $(".contact-home-tab").css({ "height": "100vh" });
    $(".contact-home-tab").css({ "width": "45px" });
  }
});



$(".work-tab").on("click", function () {
  if($(window).width() <= 570) {
    $(".about").fadeOut(500);
    $(".experience-page").fadeOut(500);
    $(".contact-page").fadeOut(500);
    $(".work-page").animate({ "height": "100vh" }, 700);
    $(".work-contents").delay(200).fadeIn(500);
    $(".work-tab").delay(300).fadeOut(300);
    $(".work-home-tab").delay(300).fadeIn(300);
  } else {
    $(".about").fadeOut(600);
    $(".experience-page").fadeOut(600);
    $(".contact-page").fadeOut(600);
    $(".work-page").animate({ "height": "80vh" }, 700);
    $(".work-contents").delay(200).fadeIn(500);
    $(".work-tab").delay(300).fadeOut(300);
    $(".work-home-tab").delay(300).fadeIn(300);
    $(".work-home-snippet").delay(400).fadeIn(500);
  }
  
});

$(".work-home-tab").on("click", function () {
  if($(window).width() <= 570) {
    $(".experience-page").css({ "height": "180px" });
    $(".experience-page").css({ "width": "100vw" });
    $(".contact-page").css({ "height": "60px" });
    $(".contact-page").css({ "width": "100vw" });
    
    $(".work-contents").fadeOut(700);
    $(".work-page").animate({ "height": "120px" }, 700);
    $(".work-home-tab").delay(300).fadeOut(300);
    $(".work-tab").delay(300).fadeIn(300);
    $(".contact-page").delay(400).fadeIn(700);
    $(".experience-page").delay(400).fadeIn(700);
    $(".about").delay(400).fadeIn(700);

    $(".experience-home-tab").css({ "height": "10vh" });
    $(".experience-home-tab").css({ "width": "100vw" });
    $(".work-home-tab").css({ "height": "10vh" });
    $(".work-home-tab").css({ "width": "100vw" });
    $(".contact-home-tab").css({ "height": "10vh" });
    $(".contact-home-tab").css({ "width": "100vw" });

  } else {

    $(".experience-page").css({ "height": "100vh" });
    $(".experience-page").css({ "width": "60px" });
    $(".contact-page").css({ "height": "100vh" });
    $(".contact-page").css({ "width": "60px" });

    $(".work-home-snippet").delay(100).fadeOut(600);
    $(".work-contents").fadeOut(700);
    $(".work-page").animate({ "height": "60px" }, 700);
    $(".work-home-tab").delay(300).fadeOut(300);
    $(".work-tab").delay(300).fadeIn(300);
    $(".contact-page").delay(400).fadeIn(700);
    $(".experience-page").delay(300).fadeIn(700);
    $(".about").delay(300).fadeIn(700);

    $(".experience-home-tab").css({ "height": "100vh" });
    $(".experience-home-tab").css({ "width": "45px" });
    $(".work-home-tab").css({ "height": "40px" });
    $(".work-home-tab").css({ "width": "100vw" });
    $(".contact-home-tab").css({ "height": "100vh" });
    $(".contact-home-tab").css({ "width": "45px" });
  }
});


$(".contact-tab").on("click", function () {
  if($(window).width() <= 570) {
    $(".about").fadeOut(500);
    $(".work-page").fadeOut(500);
    $(".experience-page").fadeOut(500);
    $(".contact-page").animate({ "height": "100vh" }, 700);
    $(".contact-contents").delay(200).fadeIn(500);
    $(".contact-tab").delay(300).fadeOut(300);
    $(".contact-home-tab").delay(300).fadeIn(300);
  } else {
    $(".about").fadeOut(600);
    $(".work-page").fadeOut(600);
    $(".experience-page").fadeOut(600);
    $(".contact-page").animate({ "width": "75vw" }, 700);
    $(".contact-contents").delay(200).fadeIn(500);
    $(".contact-tab").delay(300).fadeOut(300);
    $(".contact-home-tab").delay(300).fadeIn(300);
    $(".contact-home-snippet").delay(400).fadeIn(500);
  }
  
});

$(".contact-home-tab").on("click", function () {
  if($(window).width() <= 570) {
    $(".experience-page").css({ "height": "180px" });
    $(".experience-page").css({ "width": "100vw" });
    $(".work-page").css({ "height": "120px" });
    $(".work-page").css({ "width": "100vw" });
    
    $(".contact-contents").fadeOut(700);
    $(".contact-page").animate({ "height": "60px" }, 700);
    $(".contact-home-tab").delay(300).fadeOut(300);
    $(".contact-tab").delay(300).fadeIn(300);
    $(".experience-page").delay(400).fadeIn(700);
    $(".work-page").delay(400).fadeIn(700);
    $(".about").delay(400).fadeIn(700);

    $(".experience-home-tab").css({ "height": "10vh" });
    $(".experience-home-tab").css({ "width": "100vw" });
    $(".work-home-tab").css({ "height": "10vh" });
    $(".work-home-tab").css({ "width": "100vw" });
    $(".contact-home-tab").css({ "height": "10vh" });
    $(".contact-home-tab").css({ "width": "100vw" });

  } else {

    $(".experience-page").css({ "height": "100vh" });
    $(".experience-page").css({ "width": "60px" });
    $(".work-page").css({ "height": "60px" });
    $(".work-page").css({ "width": "100vw" });

    $(".contact-home-snippet").delay(100).fadeOut(600);
    $(".contact-contents").fadeOut(700);
    $(".contact-page").animate({ "width": "60px" }, 700);
    $(".contact-home-tab").delay(300).fadeOut(300);
    $(".contact-tab").delay(300).fadeIn(300);
    $(".experience-page").delay(400).fadeIn(700);
    $(".work-page").delay(300).fadeIn(700);
    $(".about").delay(300).fadeIn(700);

    $(".experience-home-tab").css({ "height": "100vh" });
    $(".experience-home-tab").css({ "width": "45px" });
    $(".work-home-tab").css({ "height": "40px" });
    $(".work-home-tab").css({ "width": "100vw" });
    $(".contact-home-tab").css({ "height": "100vh" });
    $(".contact-home-tab").css({ "width": "45px" });
  }
});


