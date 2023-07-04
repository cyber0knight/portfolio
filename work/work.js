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