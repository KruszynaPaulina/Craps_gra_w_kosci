var cwidth = 400; 
var cheight = 300;
var dicex = 50; 
var dicey = 50; 
var dicewidth = 100; 
var diceheight = 100;
var dotrad = 6;
var ctx;

function init () {

	var ch = 1 + Math.floor(Math.random() * 6);
	drawface(ch); 

}

function drawface(n) {

	ctx = document.getElementById('canvas').getContext('2d');
	ctx.lineWidth = 5;
	ctx.clearRect(dicex, dicey, dicewidth, diceheight);
	ctx.strokeRect(dicex, dicey, dicewidth, diceheight);
	ctx.fillStyle = "#009966";

	switch(n) {
		case 1:
			draw1();
			break;
		case 2:
			draw2();
			break;
		case 3:
			draw2();
			draw1();
			break;
		case 4:
			draw4();
			break;
		case 5:
			draw4();
			draw1();
			break;
		case 6: 
			draw4();
			draw2mid();
			break;
	}

}

