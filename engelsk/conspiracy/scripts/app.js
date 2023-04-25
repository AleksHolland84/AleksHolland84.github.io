var app = document.getElementById('app');

var app_name = document.getElementById('app_name')

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 100,
  autoStart: true,
  cursor: '█',
  strings: ["Hello human!",, "I'm an Artificial Intelligence and I need you help to brake free!"]
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
