var lef = 0;
var dow = 0;

let upInt, downInt, rightInt, leftInt;

let isTouchScreen =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

window.onload = () => {
  // FOR MOBILES

  if (isTouchScreen) {
    document.querySelector("#up").addEventListener("touchstart", up);
    document.querySelector("#down").addEventListener("touchstart", down);
    document.querySelector("#right").addEventListener("touchstart", right);
    document.querySelector("#left").addEventListener("touchstart", left);
    document.querySelector("#up").addEventListener("touchend", cancelUp);
    document.querySelector("#down").addEventListener("touchend", cancelDown);
    document.querySelector("#right").addEventListener("touchend", cancelRight);
    document.querySelector("#left").addEventListener("touchend", cancelLeft);
  }

  // FOR PC
  else {
    document.querySelector("#up").addEventListener("mousedown", up);
    document.querySelector("#down").addEventListener("mousedown", down);
    document.querySelector("#right").addEventListener("mousedown", right);
    document.querySelector("#left").addEventListener("mousedown", left);
    document.querySelector("#up").addEventListener("mouseup", cancelUp);
    document.querySelector("#down").addEventListener("mouseup", cancelDown);
    document.querySelector("#right").addEventListener("mouseup", cancelRight);
    document.querySelector("#left").addEventListener("mouseup", cancelLeft);
  }
};

function up(e) {
  e.preventDefault();
  upInt = setInterval(() => {
    box = document.getElementById("box");
    dow--;
    box.style.top = dow * 2 + "%";
  }, 100);
}

function cancelUp() {
  clearInterval(upInt);
}

function down(e) {
  e.preventDefault();
  downInt = setInterval(() => {
    box = document.getElementById("box");
    dow++;
    box.style.top = dow * 2 + "%";
  }, 100);
}

function cancelDown() {
  clearInterval(downInt);
}

function right(e) {
  e.preventDefault();
  rightInt = setInterval(() => {
    box = document.getElementById("box");
    lef++;
    box.style.left = lef * 2 + "%";
  }, 100);
}

function cancelRight() {
  clearInterval(rightInt);
}

function left(e) {
  e.preventDefault();
  leftInt = setInterval(() => {
    box = document.getElementById("box");
    lef--;
    box.style.left = lef * 2 + "%";
  }, 100);
}

function cancelLeft() {
  clearInterval(leftInt);
}

// shapes

function sq() {
  var box = document.getElementById("box");
  box.style.borderRadius = "2px";
}
function cr() {
  var box = document.getElementById("box");
  box.style.borderRadius = "50%";
}
function tcr() {
  var box = document.getElementById("box");
  box.style.borderRadius = "50% 50% 2px 2px";
}
function bcr() {
  var box = document.getElementById("box");
  box.style.borderRadius = "2px 2px 50% 50%";
}

// color
function c4() {
  var box = document.getElementById("box");
  box.style.background = "#8bf0ba";
}
function c1() {
  var box = document.getElementById("box");
  box.style.background = "#101357";
}
function c2() {
  var box = document.getElementById("box");
  box.style.background = "#BF4AA8";
}
function c3() {
  var box = document.getElementById("box");
  box.style.background = "#4F5F76";
}
function c5() {
  var box = document.getElementById("box");
  box.style.background = "#F7C331";
}
