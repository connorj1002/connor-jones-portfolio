$("#underscore").hide();
$("main").hide();

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




$(".experience-page").css({ "width": "60px" });
$(".experience-home-snippet").hide();
$(".experience-home-tab").hide();
$(".experience-contents").hide();

$(".experience-tab").on("click", function () {
  $(".about").fadeOut(600);
  $(".projects-page").fadeOut(600);
  $(".contact-page").fadeOut(600);
  $(".experience-page").animate({ width: "75vw" }, 700);
  $(".experience-contents").delay(200).fadeIn(500);
  $(".experience-tab").delay(300).fadeOut(300);
  $(".experience-home-tab").delay(300).fadeIn(300);
  $(".experience-home-snippet").delay(400).fadeIn(500);
});

$(".experience-home-tab").on("click", function () {
  $(".experience-home-snippet").delay(100).fadeOut(600);
  $(".experience-contents").fadeOut(700);
  $(".experience-page").animate({ width: "60px" }, 700);
  $(".experience-home-tab").delay(300).fadeOut(300);
  $(".experience-tab").delay(300).fadeIn(300);
  $(".contact-page").delay(400).fadeIn(700);
  $(".projects-page").delay(300).fadeIn(700);
  $(".about").delay(300).fadeIn(700);
});




$(".projects-page").css({ "height": "60px" });
$(".projects-home-snippet").hide();
$(".projects-home-tab").hide();
$(".projects-contents").hide();

$(".projects-tab").on("click", function () {
  $(".about").fadeOut(500);
  $(".experience-page").fadeOut(500);
  $(".contact-page").fadeOut(500);
  $(".projects-page").animate({ height: "80vh" }, 700);
  $(".projects-contents").delay(200).fadeIn(500);
  $(".projects-tab").delay(300).fadeOut(300);
  $(".projects-home-tab").delay(300).fadeIn(300);
  $(".projects-home-snippet").delay(400).fadeIn(500);
});

$(".projects-home-tab").on("click", function () {
  $(".projects-home-snippet").delay(100).fadeOut(600);
  $(".projects-contents").fadeOut(700);
  $(".projects-page").animate({ height: "60px" }, 700);
  $(".projects-home-tab").delay(300).fadeOut(300);
  $(".projects-tab").delay(300).fadeIn(300);
  $(".contact-page").delay(400).fadeIn(700);
  $(".experience-page").delay(400).fadeIn(700);
  $(".about").delay(400).fadeIn(700);
});



$(".contact-page").css({ "width": "60px" });
$(".contact-home-snippet").hide();
$(".contact-home-tab").hide();
$(".contact-contents").hide();

$(".contact-tab").on("click", function () {
  $(".about").fadeOut(600);
  $(".experience-page").fadeOut(500);
  $(".projects-page").fadeOut(600);
  $(".contact-page").animate({ width: "75vw" }, 700);
  $(".contact-contents").delay(200).fadeIn(500);
  $(".contact-tab").delay(300).fadeOut(300);
  $(".contact-home-tab").delay(300).fadeIn(300);
  $(".contact-home-snippet").delay(400).fadeIn(500);
});

$(".contact-home-tab").on("click", function () {
  $(".contact-home-snippet").delay(100).fadeOut(600);
  $(".contact-contents").fadeOut(700);
  $(".contact-page").animate({ width: "60px" }, 700);
  $(".contact-home-tab").delay(300).fadeOut(300);
  $(".contact-tab").delay(300).fadeIn(300);
  $(".experience-page").delay(400).fadeIn(700);
  $(".projects-page").delay(300).fadeIn(700);
  $(".about").delay(300).fadeIn(700);
});