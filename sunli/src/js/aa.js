var addAnimateClass = function(className){
	$(window).scroll(function(){
		$(className).children().each(function(i,o){
			if(($(window).height()+$(window).scrollTop()>=$(o).offset().top)&&($(o).offset().top+$(o).height()>=$(window).scrollTop())){
				//console.log(1);
				if($(o).attr("data-animate")){
					var $data_animate = $(o).attr("data-animate");
					$(o).addClass($data_animate);
				}
			}
		});
	});
};

