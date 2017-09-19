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

new Circle(10, 10, 6)
	.addTo(stage)
  .attr('fillColor', 'red')
  .animate('10s', {
    x: 0,
    y: 0
  },{
    delay: '10s'  
  }
)
  .animate('5s', {
    y: 450
  },{
    delay: '5s'  
   }
)
.animate('5s', {
  x: 300
})
  
  
new Arc(10, 10, 6, 0, 9, 9)
	.addTo(stage)
  .attr('fillColor', 'green')
  .animate('11s', {
    x: 0,
    y: 0
  },{
    delay: '11s'  
  }
)
  .animate('6s', {
    y: 450
  },{
    delay: '6s'  
   }
)
.animate('6s', {
  x: 300
})
