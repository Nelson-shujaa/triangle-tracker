function myFunction() {
  alert("Welcome to robo calculator");
  var a = document.getElementsByName("")
  var b = parseInt(prompt("Enter a second number"));
  var c = parseInt(prompt("Enter a third number"));
   if ((a+b)<=c || (a+c)<=b || (b+c)<=a) {
    alert("This is not a triangle\n Please try numbers that fit the criteria: a + b >=c");
   }
  else if (a==b || b==c || a==c) {
    alert("This is an isoceles triangle.");
  }
  else if (a==b==c) {
    alert("This is an equilateral triangle.");

  }
  else if (a!=b && b!=c && a!=c){
    alert("This is a scalene triangle.")
}
