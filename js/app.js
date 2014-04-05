$(document).ready(function(){
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-ready, .ryu-still, .ryu-cool").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate({"left": "300px"},
			500,
			function(){
				$(this).hide();
				$(this).css({"left": "-210px"});
			});
	})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-still").show();
	});
	$(document).keydown(function(event){
		if(event.which == 88){
			$(".ryu-still, .ryu-ready").hide();
			$(".ryu-cool").show();
		}
	});
	$(document).keyup(function(event){
		if(event.which == 88){ // in case another key is pressed and released while holding x
			$(".ryu-cool").hide();
			$(".ryu-still").show();
		}
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}