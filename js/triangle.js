// alert("Welcome to robo calculator");
// function myFunction() {
//
//   // var a = document.getElementsByName("First value")[0].value;
//   // var b = document.getElementsByName("Second Value")[0].value;
//   // var c = document.getElementsByName("Last Value");[0].value;
//   var a = document.formx.firstvalue.value;
//   var b = document.formx.secondvalue.value;
//   var c = document.formx.lastvalue.value;
//    if (a+b>c && a+c>b && b+c>a) {
//      if (a==b && b==c && a==c) {
//        alert("This is an equilateral triangle.");
//    }
//    else if (a!=b && b!=c && a!=c){
//      alert("This is a scalene triangle.")
//   }
//   else{
//   alert("This is an isoceles triangle.")
//   }
//  else{
//    alert("not a triangle")
//  }
// }
function myFunction() {

  // var a = document.getElementsByName("First value")[0].value;
  // var b = document.getElementsByName("Second Value")[0].value;
  // var c = document.getElementsByName("Last Value");[0].value;
  var a = parseInt(document.formx.firstvalue.value);
  var b = parseInt(document.formx.secondvalue.value);
  var c = parseInt(document.formx.lastvalue.value);
  if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c && a == c) {
      alert("This is an equilateral triangle.")
    } else if ((a * a) + (b * b) == c * c) {
      alert("This is a right angled triangle")

    } else if (a != b && b != c && a != c) {
      alert("This is a scalene triangle.")
    } else {
      alert("This is an isoceles triangle.")
    }
  } else {
    alert("not a triangle")
  }
}
