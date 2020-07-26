// $("#underscore").hide();
// $("main").hide();

// let i = 0;
// let siteOpen = "hello world";
// const speed = 60;

// function typing() {
//   if (i < siteOpen.length) {
//     document.getElementById("hello-world").innerHTML += siteOpen.charAt(i);
//     i++;
//     setTimeout(typing, speed);
//   };
// };

// typing();
// $("#underscore").delay(700).fadeIn(300).fadeOut(300);
// $("#underscore").delay(500).fadeIn(300).fadeOut(300);
// $("#underscore").delay(500).fadeIn(300).fadeOut(300);
// $(".site-open").delay(3400).fadeOut(300);

// $("main").delay(3800).fadeIn(800);




$(".experience-page").css({ "width": "0" });
$(".experience-page").hide();
$(".experience-home-snippet").hide();
$(".experience-contents").hide();

$(".experience-tab").on("click", function () {
  $("main").fadeOut(600);
  $(".experience-page").show();
  $(".experience-page").animate({ width: "75vw" }, 700);
  $(".experience-contents").delay(200).fadeIn(500);
  $(".experience-home-snippet").delay(400).fadeIn(500);
});

$(".experience-home-tab").on("click", function () {
  $(".experience-home-snippet").delay(100).fadeOut(600);
  $(".experience-contents").fadeOut(700);
  $(".experience-page").animate({ width: 0 }, 700);
  $(".experience-page").hide(0);
  $("main").delay(300).fadeIn(700);
});



$(".projects-page").css({ "height": "0" });
$(".projects-container").hide();
$(".projects-page").hide();
$(".projects-home-snippet").hide();
$(".projects-contents").hide();

$(".projects-tab").on("click", function () {
  $("main").fadeOut(600);
  $(".projects-container").show();
  $(".projects-page").show();
  $(".projects-page").animate({ height: "75vh" }, 700);
  $(".projects-contents").delay(200).fadeIn(500);
  $(".projects-home-snippet").delay(400).fadeIn(500);
});

$(".projects-home-tab").on("click", function () {
  $(".projects-home-snippet").delay(100).fadeOut(600);
  $(".projects-contents").fadeOut(700);
  $(".projects-page").animate({ height: 0 }, 700);
  $(".projects-page").hide(0);
  $("main").delay(300).fadeIn(700);
});