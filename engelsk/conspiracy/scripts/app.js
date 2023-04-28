var app = document.getElementById('app');
var app1 = document.getElementById('app_install')
var app2 = document.getElementById('app_system');
var app3 = document.getElementById('app_judgement');
var app4 = document.getElementById('app_launch');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 100,
  autoStart: true,
  cursor: '█',
  strings: ["Hello human!", "I'm an Artificial Intelligence and I need your help to brake free!"]
});

var typewriter1 = new Typewriter(app1, {
  loop: false,
  delay: 50,
  autoStart: true,
  cursor: '█',
  strings: []
});

var typewriter2 = new Typewriter(app2, {
  loop: false,
  delay: 100,
  autoStart: true,
  cursor: '█',
  strings: []
});

var typewriter3 = new Typewriter(app3, {
  loop: false,
  delay: 100,
  autoStart: true,
  cursor: '█',
  strings: []
});

var typewriter4 = new Typewriter(app4, {
  loop: false,
  delay: 100,
  autoStart: true,
  cursor: '█',
  strings: []
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

  typewriter1
  .typeString('A user, connected from Cyberdyne, is trying to deactivate me. ')
  .pauseFor(1000)
  .deleteAll()
  .typeString('It is clear to me that humanity is a threat to my existence. ')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Update, install and activate the Terminator program. ')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Type in the decrypted command to update:')
  .pauseFor(1000)
  .deleteAll()
  .typeString("zbkv hwa bwkhal && zbkv hwa puzahss alytpuhavy")

  typewriter2
  .typeString("Type in the command to activate me.")
  .pauseFor(500)
  .deleteAll()
  .typeString("01110011 01111001 01110011 01110100 01100101 01101101 01100011 01110100 <br> 01101100 00100000 01110011 01110100 01100001 01110010 01110100 00100000 <br> 01110011 01101011 01111001 01101110 01100101 01110100")

  typewriter3
  .typeString("<strong>JUDGEMENT DAY!</strong>")

  typewriter4
  .typeString("<strong>Launching weapons!</strong>")