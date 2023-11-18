let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
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

DISC = {
'1': 'Настольный теннис — олимпийский вид спорта, спортивная игра с мячом, в которой используют специальные ракетки и игровой стол, разграниченный сеткой пополам. Игра может проходить между двумя соперниками или двумя парами соперников. Задачей игроков является удерживать мяч в игре при помощи ракеток — каждый игрок после одного отскока мяча на своей половине стола должен отправить мяч на половину стола соперника.',
'2': 'Бадминто́н — вид спорта, в котором игроки располагаются на противоположных сторонах разделённой сеткой площадки и перекидывают волан через сетку ударами ракеток, стремясь «приземлить» волан на стороне противника, и наоборот, чтобы он не упал на собственное поле.',
'3': 'Дартс — ряд связанных игр, в которых игроки метают дротики в круглую мишень, повешенную на стену. В прошлом использовались различные виды мишеней и правил, однако сейчас термин «дартс» обычно относится к стандартизированной игре с определёнными конструкцией мишени и правилами.',
'4': 'Алтимат - командная неконтактная спортивная игра с использованием летающего диска («фрисби»). Первоначально была известна как алтимат фри́сби. Со временем, ввиду того, что слово frisbee является не только общим названием летающих дисков, но и товарным знаком компании «Wham-O», название было укорочено до ultimate (алтимат).',
'5': 'Футбол — командный вид спорта, в котором целью является забить мяч в ворота соперника ногами или другими частями тела (кроме рук) большее количество раз, чем команда соперника.',
'6': 'Баскетбол — спортивная командная игра с мячом, в которой мяч забрасывают руками в кольцо соперника. В баскетбол играют две команды, каждая из которых состоит из пяти полевых игроков (замены не ограничены). Цель каждой команды — забросить мяч в кольцо с сеткой (корзину) соперника и помешать другой команде завладеть мячом и забросить его в свою корзину.';
}