function validation() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let apartment = document.getElementById("apt").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  if (
    name == "" ||
    address == "" ||
    apartment == "" ||
    phoneNumber == "" ||
    isNaN(phoneNumber)
  ) {
    alert(
      "MAKE SURE YOU FILL EVERYTHANGGGG OUT, & phone Number is numbers only"
    );
    return false;
  } else {
    return true;
    form.focus();
  }
}

// function resetForm() {
// clearErrors();
// document.forms["contact"]["name"].value="";
// document.forms["contact"]["address"].value="";
// document.forms["contact"]["apt"].value="";
// document.forms["contact"]["phoneNumber"].value="";
// document.getElementById("submitButton").innerText="Submit";
// document.forms["contact"]["name"].focus();
// }
// function validateItems() {
//  //clearErrors();
// var namejs= document.forms["contact"]["name"].value;
// var addy= document.forms["contact"]["address"].value;
// var apart = document.forms["contact"]["apt"].value;
// var pNumber=document.forms["contact"]["phoneNum"];
// // if(name==""|| isNaN(Number)){
// if(isNaN(namejs)){
//   alert("name must be filled in ");
//   document.forms["contact"]["namejs"]
//     .parentElement.className ="form-group has-error";
//   document.forms["contact"]["namejs"].focus();
// return false;
// }
// if(addy==""){
//   alert("address must be filled in with a number.");
//   document.forms["contact"]["address"]
//   .parentElement.className="form-group has-error"
//   document.forms["contact"]["address"].focus();
//   return false;
//   if(apart==""){
//     alert("name must be filled in.");
//     document.forms["contact"]["apartment"]
//       .parentElement.className = "form-group has-error";
//     document.forms["contact"]["apartment"].focus();
//   return false;
//   if(pNumber=="" || isNaN(pNumber)){
//     alert("Phone Number must be filled in with a number.");
//     document.forms["contact"]["name"]
//       .parentElement.className = "form-group has-error";
//     document.forms["contact"]["phoneNum"].focus();
//   return false;
