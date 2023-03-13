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