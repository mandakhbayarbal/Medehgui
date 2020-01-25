medeelel();
medeelel();
medeelel();

function medeelel() {
  console.log("Энэ бол функц");
  console.log(
    "Дахин дахин ашиглагдах кодыг функц болгон тусд нь бичдэг бөгөөд функцээ дуудах замаар үр ашигтай кодлох арга юм."
  );
}

func("Mandakhbayar", 99);
func("Nyamtaivan", 100);
func("Khishigbayar", 77);
func("Naruto", 55);

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
