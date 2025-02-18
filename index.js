var a = prompt("What is your name?");
if (!a) {
  window.location.href = "error_page.html";
} else {
  let now = new Date();
  let x = now.getDay(); // Sunday - Saturday : 0 - 6

  switch (x) {
    case 0:
      text = "Today is Sunday";
      break;

    case 1:
      text = "Today is Monday";
      break;

    case 2:
      text = "Today is Tuesday";
      break;

    case 3:
      text = "Today is Wednesday";
      break;

    case 4:
      text = "Today is Thursday";
      break;

    case 5:
      text = "Today is Friday";
      break;

    default:
      text = "Today is Saturday";
  }
  alert(text + "... I hope you enjoy your day.... " + a);
}

document.getElementById("fbars").addEventListener("click", function () {
  document.getElementsByClassName("links")[0].classList.toggle("showmylinks");
});

function firsttext() {
  document.getElementById("slidetext").textContent =
    "New Brands Launch Coming Soon";
}
function secondtext() {
  document.getElementById("slidetext").textContent =
    "Free shipping on all orders above ₹500/-";
}
function thirdtext() {
  document.getElementById("slidetext").textContent =
    "Flat 5% off all orders use code : JATIN2620";
}
function fourthtextl() {
  document.getElementById("slidetext").textContent =
    "ANNOUNCEMENT  ANNOUNCEMENT  ANNOUNCEMENT";
}

setInterval(firsttext, 2000);
setInterval(secondtext, 4000);
setInterval(thirdtext, 6000);
setInterval(fourthtextl, 8000);

let coloridx = 0;
const colors = ["#aee4fc", "#fcc0ae", "#98809f" ,"#b5b682"];

function colorchange() {
  document.body.style.backgroundColor = colors[coloridx];
  coloridx = (coloridx + 1) % colors.length;
}

var answeredCorrectly;

function askQuestion() {
  var a = parseInt(prompt("Are you Robot? What is value of 2+6+2+0 ?"));

  if (a === 10) {
    answeredCorrectly = true;
  } else {
    window.location.href = "error_page.html";
  }
}
setTimeout(askQuestion, 15000);

function first() {
  document.getElementById("slideimage").src = "media/im2.webp";
}
function second() {
  document.getElementById("slideimage").src = "media/im3.webp";
}
function third() {
  document.getElementById("slideimage").src = "media/im4.webp";
}
function fourth() {
  document.getElementById("slideimage").src = "media/im5.webp";
}
function fifth() {
  document.getElementById("slideimage").src = "media/im1.webp";
}

setInterval(first, 2000);
setInterval(second, 4000);
setInterval(third, 6000);
setInterval(fourth, 8000);
setInterval(fifth, 10000);
