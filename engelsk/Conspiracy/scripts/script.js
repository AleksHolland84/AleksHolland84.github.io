

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
var underlineMenuItems = document.querySelectorAll("ul li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
        showMenuContent()
    });
});


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


  function runOnLoad(){
    showMenuContent();
    writeChapterTitle();
    writeChapterNumber();
    getFileName();
}
