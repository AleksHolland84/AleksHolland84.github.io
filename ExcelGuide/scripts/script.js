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



  
function showMenuContent() {
  var menues = document.getElementsByClassName("menu_text");
  var side = document.getElementsByClassName("menu_side");
  for (i = 0; i < menues.length; i++) {
      menues[i].style.display = "none";
  }
  for (i = 0; i < side.length; i++) {
      if (side[i].classList.contains("active")) {
          menues[i].style.display = "block"
      }
  }
}


// Code By Webdevtrick ( https://webdevtrick.com )
"use strict";
var underlineMenuItems = document.querySelectorAll("ul.top li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
      underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
      item.classList.add("active");
      showMenuContent()
  });
});

// This part closes the submenue (with the class of menu_text) when the mouse leves the area.
var menuSides = document.getElementsByClassName("menu_text");
for (var i = 0; i < menuSides.length; i++) {
  menuSides[i].addEventListener("mouseleave", function () {
      underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
      showMenuContent();
  });
}

// Function to get chapter title from menu and putting it as the header for each chapter.
function getChapterTitle(chapterNum) {
var chapters = document.getElementsByClassName("menu-chapter-title");
return chapters[chapterNum].innerHTML;
}


function getChapterNumber(chapter) {
  var chapterNum = document.getElementsByClassName("menu-chapter-number");
  return chapterNum[chapter].innerHTML;
}


function writeChapterTitle(){
  var chapterTitle = document.getElementsByClassName("chapter-title");
  for (i = 0; i <chapterTitle.length; i++) {
      chapterTitle[i].innerHTML = getChapterTitle(i);
  }
}

function writeChapterNumber(){
  var chapterCounter = document.getElementsByClassName("chapterNum");
  var menuChapterNumber = document.getElementsByClassName("chapterLink");
  for (i = 0; i <chapterCounter.length; i++) {
      chapterCounter[i].innerHTML = "Kapitel " + (i+1);
  };
}

// FUNCTION TO GET FILENAME
function getFileName() {
  var fileName = document.getElementsByClassName("file");
  var putfilename = document.getElementsByClassName("put-file-name");
  for (i = 0; i < fileName.length; i++) {
      var url = fileName[i].getAttribute("href");
      var filename = url.substring(url.lastIndexOf('/')+1);
      putfilename[i].innerHTML = filename;
  }
}

// SET LOCALSTORAGE WITH ALL CHECKED CHEKCBOXES
function getChecked() {
  const checked = []
  var inputs = document.getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "checkbox") {
      const checkboxId = inputs[i].id;
      const checkboxAnswer = inputs[i].checked
      checked.push({id: checkboxId, answer: checkboxAnswer})
    }
  }
  console.log(checked)
  localStorage.setItem("checked", JSON.stringify(checked));
}

// GET ALL CHECKBOXES DATA FROM LOCALSTORAGE
function setChecked(){
  const checked = JSON.parse(localStorage.getItem("checked"));
  console.log("From localStorage", checked)
  for (var i = 0; i < checked.length; i++) {
    const checkboxId = checked[i].id;
    const checkboxAnswer = checked[i].answer;
    document.getElementById(checkboxId).checked = checkboxAnswer;
  }
}

function runOnLoad(){
  showMenuContent();
  writeChapterTitle();
  writeChapterNumber();
  getFileName();
}