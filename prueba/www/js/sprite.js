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

//SPRITE
new Bitmap('sprite/uno.png').on('load', function() {
	this.addTo(stage);
  });


//AUDIO
var audio = new bonsai.Audio([
	{src: 'audio.mp3'}
  ]);
  
  audio.on('load', function(){
	audio.play();
  });
  
  stage.addChild(audio)