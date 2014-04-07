$(document).ready(function(){

	var xkeyisdown = false;
	var mouseisover = false;
	var mouseisdown = false;

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
		mouseisdown = true;
		playHadouken();
		$(".ryu-ready, .ryu-cool").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate({"left": "300px"},
			500,
			function(){
				$(this).hide();
				$(this).css({"left": "-210px"});
				mouseisdown = false;
			});

		/* makes hadouken burn text */
		var p_burn = $(".instructions p:first-child");
		if(!p_burn.hasClass("burning")){
			setTimeout(function(){
				p_burn.addClass("burning");
				setTimeout(function(){		// why doesn't chaining .delay(1700).removeClass("burning") inside the first setTimeout function work?
					p_burn.removeClass("burning");
				}, 2000);
			}, 300);
		}
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
		if(event.which == 88 && !mouseisdown){
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
