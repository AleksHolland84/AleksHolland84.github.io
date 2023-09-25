var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Listen for arrow left and right to change image
document.addEventListener('keydown', function(event){
  const key = event.key;
  if (key == "ArrowRight"){
    plusSlides(1)
  }else if (key == "ArrowLeft"){
    plusSlides(-1)
  }
})

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