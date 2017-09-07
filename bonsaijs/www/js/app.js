new Rect(10, 10, 100, 100)
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
  });