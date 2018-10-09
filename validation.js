function validation() {
  let email = document.forms["regForm"]["Email"];
  let phone = document.forms["regForm"]["Phone"];
  let note = document.forms["regForm"]["Note"];

  if (email.value == ""){
    window.alert("Prasome iveskite savo pasta.");
    email.focus();
    return false;
  } if (email.value.indexOf("@", 0) < 0) {
    window.alert("Prasome iveskite savo pasta.");
    email.focus();
    return false;
  } if (phone.value == ""){
    windows.alert("Prasome pateikti savo telefona.");
    phone.focus();
    return false;
  }if (note.value == "") {                       
      window.alert("Please enter your password"); 
      note.focus(); 
      return flase; 
  } 
  return true;

}