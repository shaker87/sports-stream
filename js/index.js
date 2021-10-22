$(window).scroll(function(){
    var sticky = $('.menu'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 250) sticky.addClass('active');
    else sticky.removeClass('active');
  })


const video_player = document.querySelector(".video-player");
const model = document.querySelector(".model")

video_player.addEventListener("click", function(){
    model.classList.add("active-model");
    document.body.style.overflowY = "hidden";
})

model.addEventListener("click", function(){
    model.classList.remove("active-model");
    document.body.style.overflowY = "scroll";
})
