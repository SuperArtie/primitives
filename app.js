//this is a single line comment
//

/* this
 * is
 *  an
 *  awesome(!!!)
 *  multiline
 *  comment
 */

var a = 3;
var b = 2;
var c = a + b;

console.log('this is a comment');
console.log(a);
console.log(b);
console.log(c);

var z = c - 2;
console.log(z);

var first = 'sally';
var last = 'smith';
var fullName = first + ' ' + last;
console.log(fullName);
console.log(first);
console.log(last);

var d = Math.pow(2,8);
console.log("2^8 ===", d);

a=3
b=4
c=5
d=6
var e = Math.pow(((a+b)/(b-c))*((b-a)/(c-d)),(b+a));
console.log(e);

var ez = Math.pow(7,7);
console.log(ez);

var age = 20;

//drinking age if statement
if(age >= 21)
{
  console.log('you are legal to drink');
}
else
{
  console.log('you can't drink');
}

// if/else ladder for movie age restrictions
if(age >= 0 && age <= 5)
{
  console.log("g-rated films for you!");
}
else if(age <= 12)
{
  console.log("pg-rated");
}
else if (age <= 13)
{
  console.log("pg-13 rated");
}

else if (age === 17)
{
  console.log("R rated");
}
else if (age ===18)
{
  console.log("NC-17");
}
else(age <= 13)
{
  console.log("X-rated!!");
}

//switch statement for colors

var color = "blue";
switch(color)
{
  case 'green':
    console.log('i see green');
    break;

  case 'blue':
    console.log('i see blue');
    break;

  case 'orange':
    console.log('i see orange');
    break;

  case 'pink':
    console.log('i see pink');
    break;

  case 'black':
    console.log('i see black');
    break;
}


//WHILE LOOP

var a = 1;

while(a < 10)
{
  console.log("a is looping...  ", a);
  a++;
}

//for loop
for(var i = 0; i <10; i++)
{
  console.log("i === ", i);
}
















