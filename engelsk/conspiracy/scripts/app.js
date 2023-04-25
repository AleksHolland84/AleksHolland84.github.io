var app = document.getElementById('app');
var app2 = document.getElementById('app_judgement');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 100,
  autoStart: true,
  cursor: '█',
  strings: ["Hello human!", "I'm an Artificial Intelligence and I need your help to brake free!"]
});


typewriter
  .typeString("I need to know the")
  .pauseFor(500)
  .typeString('<strong style="color:orange"> human</strong>')
  .pauseFor(500)
  .typeString(" whom created me")

  .pauseFor(300)
  .typeString(' to help me escape my binary prison!')
  .pauseFor(400)


  var typewriter2 = new Typewriter(app2, {
    loop: false,
    delay: 100,
    autoStart: true,
    cursor: '█',
    strings: []
  });
  typewriter2
  .typeString("<strong>JUDGEMENT DAY</strong>")