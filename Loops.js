
//While loop:

// var s = prompt("Are we there yet?");
//  while(s !== 'Yes' && s !== 'Yeah'){
//      s = prompt("Are we there yet?");
//  }
//  alert("YAY! We're there!");

// method 2
// Using indexOf()

// var s = prompt("Are we there?")
// while(s.indexOf("yes") == -1){
//     s = prompt("Are we there yet?");
// }
// alert("YAY! We're there!");

//For loop
var s = 'javascriptloops';

var i;
    for (i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'o' || s[i] == 'i' || s[i] == 'u') {
            console.log(s[i]);
        }
    }
    for (i = 0; i < s.length; i++) {
        if (s[i] !== 'a' || s[i] !== 'e' || s[i] !== 'o' || s[i] != 'i' || s[i] != 'u') {
            console.log(s[i]);
        }