"use strict";
var underlineMenuItems = document.querySelectorAll("ul.top li");

underlineMenuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("active")) {
      // If the clicked item is already active, remove the active class
      item.classList.remove("active");
      showMenuContent();
    } else {
      // Otherwise, remove active class from all and set the clicked one as active
      underlineMenuItems.forEach(function (el) { el.classList.remove("active"); });
      item.classList.add("active");
      showMenuContent();
    }
  });
});

function showMenuContent() {
  var menues = document.getElementsByClassName("menu_text");
  var side = document.getElementsByClassName("menu_side");

  for (let i = 0; i < menues.length; i++) {
    menues[i].style.display = "none";
  }

  for (let i = 0; i < side.length; i++) {
    if (side[i].classList.contains("active")) {
      menues[i].style.display = "block";
    }
  }
}


// This part closes the submenue (with the class of menu_text) when the mouse leves the area.
var menuSides = document.getElementsByClassName("menu_text");
for (var i = 0; i < menuSides.length; i++) {
  menuSides[i].addEventListener("mouseleave", function () {
      underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
      showMenuContent();
  });
}

// The two functions below (getChapterTitle() & writeChaptreTitle()) gets the h2 chapters in the index file,
// and adds chapter number in front - for automating "sorting" of new chapters or added content. 
function getChapterTitle(chapterNum) {
var chapters = document.getElementsByClassName("menu-chapter-title");
return chapters[chapterNum].innerHTML;
}

function writeChapterTitle(){
  var chapterTitle = document.getElementsByClassName("chapter-title");
  for (i = 0; i <chapterTitle.length; i++) {
      chapterTitle[i].innerHTML = (i+1) +". "+ getChapterTitle(i);
  }
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





function runOnLoad(){
  showMenuContent();
  writeChapterTitle();
  getFileName();
}