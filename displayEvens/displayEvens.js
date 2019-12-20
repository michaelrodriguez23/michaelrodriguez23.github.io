function validateItems() {
var num1= Number(document.forms["numberFun"]["num1"].value);
var num2= Number(document.forms["numberFun"]["num2"].value);
var step= Number(document.forms["numberFun"]["step"].value);

if (num1==""|| num2 ==""||step ==""||isNaN(num1)||isNaN(num2)||isNaN(step)) {
alert("please enter valid numbers.");
}
else {
for(var i=num1; i<= num2; i= i +step) {
  if( i%2==0){
    //document.getElementById("results").innerHTML += i + "<br>";
    document.getElementById("results").innerHTML += i + "<br>";
    console.log(i);
  }
}
document.getElementById("results").style.display ="block";
}
return false;
}
