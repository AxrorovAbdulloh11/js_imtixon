// let ism = prompt("ISMINGIZNI KIRITING")
// let yoshingiz = prompt("YOSHINGIZNI KIRITING")
// console.log(ism, yoshingiz);
// if (yoshingiz >= 18) {
//     alert("Assalomu Alaykum")
// } 
// else {
//     console.log("Qalesan");   
// } //                               1 topshiriq


// let ism = prompt("ISMINGIZNI KIRITING");
// let yow = prompt("TUG'ILGAN YILINGIZNI KIRITING");

// console.log(ism, yow);

// if (yow >= 2000) {// 
//     alert("bola");
// } else {
//     alert("nafaqaada");
// } //                               2 topshiriq
 


let ism = prompt("ISMINGIZNI KIRITING");
let shaxar = prompt("YASHAYOTGAN SHAHARINGIZNI KIRITING")
let yow = prompt("TUG'ILGAN YILINGIZNI KIRITING");

console.log(ism, shaxar, yow .trim() .toUpperCase());

if (yow >= 2000) {
    alert("Siz juda yosh ekansiz!");
} else if (shaxar.toLowerCase() === "toshkent") {
    alert("Toshkentlik foydalanuvchi aniqlandi!");
} else if (ism.length <= 3) {
    alert("Ismingiz juda qisqa ekan!");
} else {
    alert("Ma'lumotlar qabul qilindi!");
} //                               3 topshiriq