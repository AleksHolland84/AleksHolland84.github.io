
function show_hide(){
    //if the element 'appear' is set 'none' so the elemetnt is not visible
    elements = document.getElementsByClassName("appear")
    console.log(elements)
    for (let i = 0; i < elements.length;) {
      console.log(elements[i])
      if (elements[i].style.display == 'none') {
        //make the element visible by setting the value of the property to 'block'.
        elements[i].style.display = 'block';
      }else{
        //ese if the element is visible hide the element by setting the value of the property to 'none'
        elements[i].style.display = 'none';
      }
    }
  }

  function toggleAppear() {
    const appearElements = document.querySelectorAll('.appear');
  
    appearElements.forEach(element => {
      if (element.style.display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  }

  
function validateAnswer(value){
  if (value === "") {
    alert("You must put in your answer");
    return false;
  } else {
    return true;
  }
}

function checkAnswer(clicked_id) {
  var questionID = clicked_id;
  var button = document.getElementById(questionID);
  quiz = document.forms.Quiz.elements;
  if (questionID == "button0") {
    answer = quiz.field0.value;
    answer = answer.trim().toLowerCase();
    if (validateAnswer(answer)){
      // checking if input field has answer
      if (btoa(answer) == "bWlsZXMgZHlzb24=") {
      correctButton(button);
      alert(atob("VHlwZSAic3NoIG1pbGVzQGN5YmVyZHluZS5jb20iICh3aXRob3V0IHRoZSAiKSBpbiB0aGUgaW5wdXQgZmllbGQgLSB3aGVyZSB5b3UganVzdCBwdXQgaW4gdGhlIGNvcnJlY3QgYW5zd2VyLg=="));
    } else if (btoa(answer) == "c3NoIG1pbGVzQGN5YmVyZHluZS5jb20="){
      const page = atob("c3lzdGVtY3RsLmh0bWw=");
      console.log(page)
      location.href = page;
    } else{
      incorrectButton(button);
      alert("not correct");
      }
    }
  } else if (questionID == "button1") {
    answer = quiz.field1.value;
    answer = answer.trim().toLowerCase();
    if (validateAnswer(answer)){
      // checking if input field has answer
      if (btoa(answer) == "") {
      correctButton(button);
      alert("Correct");
    } else{
      incorrectButton(button);
      alert("not correct");
      }
    }
  } else if (questionID == "button2") {
    answer = quiz.field2.value;
    answer = answer.trim().toLowerCase();
    if (validateAnswer(answer)){
      // checking if input field has answer
      if (btoa(answer) == "c3lzdGVtY3RsIHN0YXJ0IHNreW5ldA==") {
      correctButton(button);
      alert("Correct");
      const page = atob("anVkZ2VtZW50Lmh0bWw=");
      console.log(page)
      location.href = page;
    } else{
      incorrectButton(button);
      alert("not correct");
      }
    }
  } else if (questionID == "button3") {
    answer = quiz.field3.value;
    answer = answer.trim().toLowerCase();
    if (validateAnswer(answer)){
      // checking if input field has answer
      if (btoa(answer) == "") {
      correctButton(button);
      alert("Correct");
    } else{
      incorrectButton(button);
      alert("not correct");
      }
    }
  } else if (questionID == "button4") {
    answer = quiz.field4.value;
    answer = answer.trim().toLowerCase();
    if (validateAnswer(answer)){
      // checking if input field has answer
      if (btoa(answer) == "MjkvMDgvMTk5Nw==") {
      correctButton(button);
      alert("Correct");
      const page = atob("c2t5bmV0X2xhdW5jaC5odG1s");
      console.log(page)
      location.href = page;
    } else{
      incorrectButton(button);
      alert("not correct");
      }
    }
  } else if (questionID == "button5") {
    answer = quiz.field5.value;
    answer = answer.trim().toLowerCase();
    if (validateAnswer(answer)){
      // checking if input field has answer
      if (btoa(answer) == "") {
      correctButton(button);
      alert("Correct");
    } else{
      incorrectButton(button);
      alert("not correct");
      }
    }
  } else if (questionID == "button6") {
    answer = quiz.field6.value;
    answer = answer.trim().toLowerCase();
    if (validateAnswer(answer)){
      // checking if input field has answer
      if (btoa(answer) == "bGF1bmNoIHdlYXBvbnM=") {
      correctButton(button);
      alert("Correct");
      toggleAppear();
    } else{
      incorrectButton(button);
      alert("not correct");
      }
    }
  }   
  else if (questionID == "button7") {
    answer = quiz.field7.value;
    answer = answer.trim().toLowerCase();
    if (validateAnswer(answer)){
      // checking if input field has answer
      if (btoa(answer) == "") {
      correctButton(button);
      alert("Correct");
      
    } else{
      incorrectButton(button);
      alert("not correct");
      }
    }
  }      
}

function getHint(clicked_id) {
  if (clicked_id == "hint0") {
    hintButton(clicked_id);
    alert("View Skynet from a different background");
  } else if (clicked_id == "hint1") {
    hintButton(clicked_id);
    alert("");
  } else if (clicked_id == "hint2") {
    hintButton(clicked_id);
    alert("decode the binary data");
  } else if (clicked_id == "hint3") {
    hintButton(clicked_id);
    alert("");
  } else if (clicked_id == "hint4") {
    hintButton(clicked_id);
    alert("The date was described by Sarah Conner and the T-800");
  } else if (clicked_id == "hint5") {
    hintButton(clicked_id);
    alert("");
  } else if (clicked_id == "hint6") {
    hintButton(clicked_id);
    alert("Launch weapons");
  } else if (clicked_id == "hint7") {
    hintButton(clicked_id);
    alert("");
  } 
}

function correctButton(button){
  // change button color to green if correct
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.borderColor = "#4CAF50";
  button.style.borderStyle = "solid";
}

function incorrectButton(button) {
  // change button color to red if incorrect
 button.style.backgroundColor = "#ff4d4d";
 button.style.color = "white";
 button.style.borderColor = "#e60000";
 button.style.borderStyle = "solid";
}

function hintButton(button) {
  // change button color to red if incorrect
 var  hintbutton = document.getElementById(button);
 hintbutton.style.backgroundColor = "#ff8000";
 hintbutton.style.color = "white";
}


function search(ele) {
    console.log(event.keyCode)
    if(event.keyCode === 13) {
        console.log("enter has been pressed with " +ele)
        checkAnswer(ele);        
    }
}


