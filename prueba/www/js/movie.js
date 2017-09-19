var rectPath = new Rect(0,0,150,150)
.attr({
	fillColor: 'red',
	strokeColor: 'green',
	strokeWidth: 5,
	x:150,
	y:150
});

stage.addChild(rectPath);

rectPath.animate('2s',{
	rotation: Math.PI*2,
	x: 1050
},{
	easing: 'elasticInOut'
});

//Anim 2
var rectPath2 = new Rect(0,0,150,150)
.attr({
	fillColor: 'rgba(40, 180, 99,1)',
	strokeColor: 'green',
	strokeWidth: 5,
	y:150,
	x:1050,

});

stage.addChild(rectPath2);

rectPath2.animate('4s',{
	rotation: Math.PI*2,
	x:150,
	y:400
},{
	easing: 'elasticInOut'
});

//Anim 3
var rectPath2 = new Rect(0,0,150,150)
.attr({
	fillColor: 'rgba(244, 208, 63,1)',
	strokeColor: 'green',
	strokeWidth: 5,
	x:150,
	y:400

});

stage.addChild(rectPath2);

rectPath2.animate('6s',{
	rotation: Math.PI*2,
	y:150,
	x:1050,
},{
	easing: 'elasticInOut'
});
