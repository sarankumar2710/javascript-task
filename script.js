let out = "";

// =======================
// SECTION 1 – Arithmetic
// =======================

out += "<div class='section'><h2>Section 1 – Arithmetic</h2>";

let a = 25;
let b = 4;

out += "25 + 4 = " + (a+b) + "<br>";
out += "25 - 4 = " + (a-b) + "<br>";
out += "25 * 4 = " + (a*b) + "<br>";
out += "25 / 4 = " + (a/b) + "<br>";

out += "100 % 30 = " + (100%30) + "<br>";
out += "7 * 2 = " + (7*2) + "<br>";
out += "2 * 5 = " + (2*5) + "<br>";

let n=50;
out += "50 / 5 = " + (n/5) + "<br>";
out += "45 % 6 = " + (45%6) + "<br>";
out += "0.5 * 8 = " + (0.5*8) + "<br>";
out += "75 - 200 = " + (75-200) + "<br>";
out += "10 + 20 + 30 = " + (10+20+30) + "<br>";
out += "9 % 2 = " + (9%2) + "<br>";

out += "</div>";


// =======================
// SECTION 2 – Increment
// =======================

out += "<div class='section'><h2>Section 2 – Increment</h2>";

let a1=5;
out += "a=5 | a++ → " + a1++ + " then " + a1 + "<br>";

let a2=5;
out += "a=5 | ++a → " + (++a2) + " then " + a2 + "<br>";

let a3=10;
let b3=a3++;
out += "a=10 b=a++ → a="+a3+" b="+b3+"<br>";

let a4=10;
let b4=++a4;
out += "a=10 b=++a → a="+a4+" b="+b4+"<br>";

let a5=1;
let b5=a5++ + a5++;
out += "a=1 | a++ + a++ → a="+a5+" b="+b5+"<br>";

let a6=1;
let b6=++a6 + ++a6;
out += "a=1 | ++a + ++a → a="+a6+" b="+b6+"<br>";

let a7=3;
a7=a7++;
out += "a=3 | a=a++ → "+a7+"<br>";

let a8=3;
a8=++a8;
out += "a=3 | a=++a → "+a8+"<br>";

let x1=5;
let y1=--x1;
out += "x=5 y=--x → x="+x1+" y="+y1+"<br>";

let x2=5;
let y2=x2--;
out += "x=5 y=x-- → x="+x2+" y="+y2+"<br>";

out += "</div>";


// =======================
// SECTION 3 – Assignment
// =======================

out += "<div class='section'><h2>Section 3 – Assignment</h2>";

let c=10;
c+=5;
out+="10 +=5 → "+c+"<br>";

let d=20;
d-=8;
out+="20 -=8 → "+d+"<br>";

let e=7;
e*=3;
out+="7 *=3 → "+e+"<br>";

let f=40;
f/=5;
out+="40 /=5 → "+f+"<br>";

let g=25;
g%=4;
out+="25 %=4 → "+g+"<br>";

let h=5;
h+=3;
h*=2;
out+="a=5 a+=3 a*=2 → "+h+"<br>";

out+="</div>";


// =======================
// SECTION 4 – Comparison
// =======================

out+="<div class='section'><h2>Section 4 – Comparison</h2>";

out+="5 == '5' → "+(5=="5")+"<br>";
out+="5 === '5' → "+(5==="5")+"<br>";
out+="0 == false → "+(0==false)+"<br>";
out+="0 === false → "+(0===false)+"<br>";
out+="null == undefined → "+(null==undefined)+"<br>";
out+="null === undefined → "+(null===undefined)+"<br>";
out+="'10' > 5 → "+("10">5)+"<br>";
out+="'2' > '10' → "+("2">"10")+"<br>";
out+="true == 1 → "+(true==1)+"<br>";
out+="true === 1 → "+(true===1)+"<br>";

out+="</div>";


// =======================
// SECTION 5 – Logical
// =======================

out+="<div class='section'><h2>Section 5 – Logical</h2>";

out+="true && false → "+(true&&false)+"<br>";
out+="true || false → "+(true||false)+"<br>";
out+="false || false → "+(false||false)+"<br>";
out+="!true → "+(!true)+"<br>";
out+="!(5>2) → "+(!(5>2))+"<br>";
out+="5>3 && 10>5 → "+(5>3 && 10>5)+"<br>";
out+="5>3 && 10<5 → "+(5>3 && 10<5)+"<br>";
out+="5<3 || 10<5 → "+(5<3 || 10<5)+"<br>";
out+="5<3 || 10>5 → "+(5<3 || 10>5)+"<br>";

out+="</div>";


// =======================
// SECTION 6 – Ternary
// =======================

out+="<div class='section'><h2>Section 6 – Ternary</h2>";

let age=20;
out+="Age 20 → "+(age>=18?"Adult":"Minor")+"<br>";

let marks=45;
out+="Marks 45 → "+(marks>=50?"Pass":"Fail")+"<br>";

let num=8;
out+="8 → "+(num%2==0?"Even":"Odd")+"<br>";

let score=82;
let grade = score>=90?"A":score>=75?"B":score>=50?"C":"Fail";
out+="Score 82 → Grade "+grade+"<br>";

let p=-3;
out+="Number -3 → "+(p>=0?"Positive":"Negative")+"<br>";

out+="</div>";


// =======================
// SECTION 7 – Strings
// =======================

out+="<div class='section'><h2>Section 7 – Strings</h2>";

out+="Hello + World → "+"Hello"+" "+"World"+"<br>";

let first="Pradeep";
let last="Kaneesh";

out+="Full Name → "+first+" "+last+"<br>";
out+=`Template String → My name is ${first} ${last}<br>`;
out+="'10' + 5 → "+("10"+5)+"<br>";
out+="5 + '10' → "+(5+"10")+"<br>";

out+="</div>";


// =======================
// SECTION 8 – Implicit
// =======================

out+="<div class='section'><h2>Section 8 – Implicit Conversion</h2>";

out+="'5'+2 → "+("5"+2)+"<br>";
out+="'5'-2 → "+("5"-2)+"<br>";
out+="'5'*2 → "+("5"*2)+"<br>";
out+="true+1 → "+(true+1)+"<br>";
out+="false+'1' → "+(false+"1")+"<br>";

out+="</div>";


// =======================
// SECTION 9 – Explicit
// =======================

out+="<div class='section'><h2>Section 9 – Explicit Conversion</h2>";

out+="Number('123') → "+Number("123")+"<br>";
out+="Number('abc') → "+Number("abc")+"<br>";
out+="Number(true) → "+Number(true)+"<br>";

out+="Boolean('') → "+Boolean("")+"<br>";
out+="Boolean('hello') → "+Boolean("hello")+"<br>";

out+="</div>";

document.getElementById("output").innerHTML=out;