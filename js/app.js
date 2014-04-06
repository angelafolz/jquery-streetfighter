$(document).ready(function(){
	var xkeyisdown = false;
	var mouseisover = false;

	$(".ryu").mouseenter(function(){
		mouseisover = true;
		if(!xkeyisdown){			// so doesn't flicker if move mouse while holding x
			$(".ryu-still").hide();
			$(".ryu-ready").show();
		}
	})
	.mouseleave(function(){
		mouseisover = false;
		if(!xkeyisdown){			// so doesn't flicker if move mouse while holding x
			$(".ryu-ready").hide();
			$(".ryu-still").show();
		}
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-ready, .ryu-cool").hide();
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
		if(xkeyisdown){
			$(".ryu-cool").show();
		}
		else {
			$(".ryu-ready").show();
		}
	});
	$(document).keydown(function(event){
		if(event.which == 88){
			xkeyisdown = true;
			$(".ryu-still, .ryu-ready, .ryu-throwing").hide();
			$(".ryu-cool").show();
		}
	});
	$(document).keyup(function(event){
		if(event.which == 88){			// in case another key is pressed and released while holding x
			xkeyisdown = false;
			$(".ryu-cool").hide();
			if(mouseisover){
				$(".ryu-ready").show();
			}
			else {
				$(".ryu-still").show();
			}
		}
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}