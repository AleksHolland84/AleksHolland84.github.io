
function show_hide(){
    //if the element 'appear' is set 'none' so the elemetnt is not visible
    if (document.getElementById("appear").style.display == 'none') {
      //make the element visible by setting the value of the property to 'block'.
      document.getElementById("appear").style.display = 'block';
    }else{
      //ese if the element is visible hide the element by setting the value of the property to 'none'
      document.getElementById("appear").style.display = 'none';
    }
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
      alert(atob("VHlwZSAianVkZ2VtZW50IGRheSIgKHdpdGhvdXQgdGhlICIpIGluIHRoZSBpbnB1dCBmaWVsZCAtIHdoZXJlIHlvdSBqdXN0IHB1dCBpbiB0aGUgY29ycmVjdCBhbnN3ZXIu"));
    } else if (btoa(answer) == "anVkZ2VtZW50IGRheQ=="){
      const page = atob("anVkZ2VtZW50Lmh0bWw=");
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
      if (btoa(answer) == "bWlsZXMgZHlzb24=") {
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
      if (btoa(answer) == "MjkvMDgvMjAxNg==") {
      correctButton(button);
      alert("Correct");
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
      if (btoa(answer) == "YWlyb2R1bXAtbmc=") {
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
      if (btoa(answer) == "ZnV0dXJlbGVhcm4gY291cnNlcyBhcmUgYXdlc29tZQ==") {
      correctButton(button);
      alert("Correct");
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
      if (btoa(answer) == "c2VjdXJlcGFzc3dvcmQ=") {
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
    alert("It is a tool from the aircrack-ng suit");
  } else if (clicked_id == "hint2") {
    hintButton(clicked_id);
    alert("The date was given to Kyle Reese by the T-1000");
  } else if (clicked_id == "hint3") {
    hintButton(clicked_id);
    alert("The tool is used to 'dump' the captured handchake");
  } else if (clicked_id == "hint4") {
    hintButton(clicked_id);
    alert("Data often get represented in hex. Try using a tool to decode the hex-string (CyberChef)");
  } else if (clicked_id == "hint5") {
    hintButton(clicked_id);
    alert("john --format=Raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt myhash.txt");
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


