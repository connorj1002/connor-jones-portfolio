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

$(".experience-tab").on("click", function () {
  $("main").fadeOut(600);
  $(".experience-page").show();
  $(".experience-page").animate({ width: "75vw" }, 700);
  $(".experience-home-snippet").delay(300).fadeIn(800);
});

// user clicks experience tab
// experience page grows from 0 to 70vw
// main fades
// home tab appears on far right of experience page
// remaining vw displays home snip
