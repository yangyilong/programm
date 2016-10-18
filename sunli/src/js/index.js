(function(){
	var swiper = new Swiper(".swiper-container",{
		"direction":"vertical",
		 loop:true,
		// pagination:".swiper-pagination",

		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	});

	var musicC = document.querySelector(".music-c");
	var musicNote = document.querySelector(".music-note");
	var audio = document.querySelector("audio");

	musicC.addEventListener("click",function(){
		if(audio.paused){
			audio.play();
			musicNote.style.zIndex =2;
			musicC.style.animationPlayState = "running";
		}else {
			musicNote.style.zIndex =-1;
			audio.pause();
			musicC.style.animationPlayState = "paused";
		}
	})

})()
