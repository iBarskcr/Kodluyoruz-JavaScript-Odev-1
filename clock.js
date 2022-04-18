let userName = prompt("Adınız nedir?", "") || "Misafir"; // İsim belirle, veri yoksa "Misafir" yap.
document.querySelector("#myName").innerHTML = userName; // İsmi HTML'e geç.

let daysOfWeek = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function showTime() {
  const addZero = (timeVar) => (timeVar < 10 ? `0${timeVar}` : timeVar); // Sıfır ekleme fonksiyonu.
  let dateObj = new Date(),
    day = `&nbsp${daysOfWeek[dateObj.getDay()]}`, // Gün değişkeninin karşılığı daysOfWeek dizisinden çekiliyor.
    hour = dateObj.getHours(),
    minutes = dateObj.getMinutes(),
    seconds = dateObj.getSeconds(); // Date nesnesinden veriler alınıyor.
  document.querySelector("#myClock").innerHTML = `${addZero(hour)} : ${addZero(
    minutes
  )} : ${addZero(seconds)} ${day}`;
}
setInterval(showTime, 1000); // Her saniye yineleme.
