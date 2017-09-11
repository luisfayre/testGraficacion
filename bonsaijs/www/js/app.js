/*new Rect(10, 10, 100, 100)
.addTo(stage)
.attr('fillColor', 'red')
.animate('5s', {
    x: 700,
  },{
    delay: '5s'  
  }
)
.animate('5s', {
    x: -700,
  }); */

new Circle(500, 500, 100)
	.addTo(stage)
	.attr('fillColor', 'red');

new Arc(300, 300, 100, 0, 50, 300)
	.addTo(stage)
	.attr('fillColor', 'red');