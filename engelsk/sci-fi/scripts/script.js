

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
 showMenuContent()


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
