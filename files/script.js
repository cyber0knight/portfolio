TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  // options here
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['0', '1', '2', '3'],
  scrollingSpeed: 1500,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector(".text");
    const tl = new TimelineMax({ delay: 0.7 });
    tl.fromTo(title, 0.5, { x: "-20%", opacity: 0 }, { x: "0%", opacity: 1 });
    const img = section.querySelector(".image");
    tl.fromTo(img, 0.7, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1 });

    if (destination.index === 0) {
      const portfolio = document.querySelector(".portfolio");
      tl.fromTo(portfolio, 0.5, { y: "-100%", opacity: 0 }, { y: "0%", opacity: 1 });
      const text2 = document.querySelector(".text2");
      tl.fromTo(text2, 0.5, { x: "-20%", opacity: 0 }, { x: "0%", opacity: 1 });
    }
  }
});

document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

$(document).ready(function() {
  var toggleClick = document.querySelector(".toggleBox");
  var dropElement = $(".drop");

  dropElement.hide(); // Hide the .drop element initially

  $(toggleClick).click(function() {
    dropElement.slideToggle();
    toggleClick.classList.toggle('active');
  });
  $(".dropDown a").click(function() {
    dropElement.slideUp(1000);
    toggleClick.classList.remove('active');
  });
});
