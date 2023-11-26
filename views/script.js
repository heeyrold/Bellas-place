$(document).ready(function () {
  $("H1").addClass("header-title");

  var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
      },
      pagination: {
          el: ".swiper-pagination",
      },
  });

  document.getElementById('next').onclick = function(){
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
  }
  document.getElementById('prev').onclick = function(){
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').prepend(lists[lists.length - 1]);
  }
});
