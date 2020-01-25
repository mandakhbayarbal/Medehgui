//Хувьсагч болон Функцаа тодорхойлж байна
var name = "Naraa";
var avgScore = "100";

function medeelel() {
  console.log("Энэ бол функц");
  console.log(
    "Дахин дахин ашиглагдах кодыг функц болгон тусд нь бичдэг бөгөөд функцээ дуудах замаар үр ашигтай кодлох арга юм."
  );
}

function func(name, avgScore) {
  //switch, case ашиглан бичих
  switch (true) {case avgScore <= 100 && avgScore >= 90:
      console.log(name + " бол ОНЦ сурлагатан");
      break;
    case avgScore < 90 && avgScore >= 80:
      console.log(name + " бол САЙН сурлагатан");
      break;
    case avgScore < 80 && avgScore >= 70:
      console.log(name + " бол ДУНД сурлагатан");
      break;
    case avgScore < 70 && avgScore >= 60:
      console.log(name + " бол МУУ сурлагатан");
      break;
    default:
      console.log(name + " бол СУРЛАГАГҮЙ нөхөр байна доо. ");
      break;
  }
}

//Ажиллуулах хэсэг
console.log("---------------------------------------------------------------------");
console.log("Ажиллаж байна :) ");
console.log("---------------------------------------------------------------------");
medeelel();
console.log("---------------------------------------------------------------------");
func("Tsukushima", 99);
func("Nishinoya", 100);
func("Kageyama", 77);
func("Hinata", 55);
console.log("---------------------------------------------------------------------");
console.log("---------------------------------------------------------------------");
console.log("---------------------------------------------------------------------");
