let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function () {

if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}

else {
tg.MainButton.setText("Вывести информацию по настольному тенису");
item = "1";
tg.MainButton.show();
}
});

btn2.addEventListener("click", function () {

if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}

else {
tg.MainButton.setText("Вывести информацию по бадминтону");
item = "2";
tg.MainButton.show();
}
  });

btn3.addEventListener("click", function () {

if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}

else {
tg.MainButton.setText("Вывести информацию по дартсу");
item = "3";
tg.MainButton.show();
}
  });

btn4.addEventListener("click", function () {

if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}

else {
tg.MainButton.setText("Вывести информацию по алтимат фрисби");
item = "4";
tg.MainButton.show();
}
  });

btn5.addEventListener("click", function () {

if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}

else {
tg.MainButton.setText("Вывести информацию по футболу");
item = "5";
tg.MainButton.show();
}
  });

btn6.addEventListener("click", function () {

if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}

else {
tg.MainButton.setText("Вывести информацию по баскетболу");
item = "6";
tg.MainButton.show();
}
  });

Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(item);
})
