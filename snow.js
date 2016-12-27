window.onload = function(){
	
	var canvas = document.getElementById("sky");
	var ctx = canvas.getContext("2d");
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;
	canvas.width = WIDTH;
	canvas.height = HEIGHT ;

	var mf =400;   //max flakes
	var flakes = [];
 

	for(var i=0;i<mf;i++)
	{
		flakes.push(
			{
				"x" : Math.random()*(WIDTH +1000)-500,
				"y" : Math.random()*HEIGHT,
				"r" : Math.random()*4+1,
				"d" : Math.random() + 1
			}
				)
	}

	function draw(){
		ctx.clearRect(-500,0,WIDTH+1000,HEIGHT);
		ctx.save();
		ctx.fillStyle = "white";
		ctx.beginPath();
		for(var i=0;i<mf;i++)
		{
			ctx.moveTo(flakes[i].x,flakes[i].y);
			ctx.arc(flakes[i].x,flakes[i].y,flakes[i].r,0,Math.PI*2,true);
		}
		ctx.fill();
		ctx.restore();
	}


	var angle =0;
	function update(){
		angle+=0.01;
		for(var i=0;i<mf;i++){
			flakes[i].y += Math.pow(flakes[i].d, 2) +1;
			flakes[i].x += Math.sin(angle)*2;
		
			if(flakes[i].y > HEIGHT){
				flakes[i] = {
				"x" : Math.random()*(WIDTH +1000)-500,
				"y" : 0,
				"r" : Math.random()*4+1,
				"d" : Math.random() + 1
			}
			}
		}
	}

	function animate(){
		draw();
		update();
	}
	setInterval(animate,25);
}