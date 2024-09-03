
const _length = 5;
const _widht = 3;
const _perimeter = 2;
console.log(_length * _widht); 
//write a code to find area of rectangle no.1

console.log(_perimeter * (_length + _widht));
//write a code to find perimeter of rectangle no.2

// no 3 find diameter, circumference and area of a circle

let _radius : number = 5;
let _diameter = _radius*2 ;
let pi = Math.PI;
let _lingkaran: number = 1 / 4 * pi * _diameter**2 ;
let _areaLingkaran: number = 2 * pi *_radius;

console.log
    ("Diameter: " + _diameter + " | " 
    +"area lingkaran: "+_areaLingkaran.toString()+" | " 
    +"lingkaran: "+ _lingkaran.toString() ); 

// no 4 find angles of triangle if two angles are given

    let sudut1: number = 80; // Ganti angka ini dengan sudut pertama segitiga
    let sudut2: number = 65; // Ganti angka ini dengan sudut kedua segitiga
    
    // Menghitung sudut ketiga dari segitiga
    let hasil: number = 180 - sudut1 - sudut2;
    
    // Menampilkan hasil
    console.log("Sudut pertama: "+ sudut1 +" derajat");
    console.log("Sudut kedua: "+ sudut2 +" derajat");
    console.log("Sudut ketiga: "+ hasil +" derajat");

//no 5 convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days

let totalhari: number = 400; // Ganti angka ini dengan jumlah hari yang ingin Anda konversi

// Menghitung jumlah tahun
let tahun: number = Math.floor((totalhari / 365));

// Menghitung jumlah bulan
let bulan: number = Math.floor((totalhari % 365 / 30));

// Menghitung jumlah hari
let hari: number = Math.floor((totalhari % 365) % 30);

// Menampilkan hasil
console.log("Jumlah total hari: "+ totalhari);
console.log("Jumlah tahun: "+ tahun);
console.log("Jumlah bulan: "+ bulan);
console.log("Jumlah hari: "+ hari);

//no 6 Write a code to get difference between dates in days.

// Mendefinisikan dua tanggal
let tanggal1: Date = new Date("2022-01-20"); // Ganti dengan tanggal pertama
let tanggal2: Date = new Date("2022-01-22"); // Ganti dengan tanggal kedua

// Mendapatkan milidetik
let waktu1: number = tanggal1.getTime();
let waktu2: number = tanggal2.getTime();

// Menghitung selisih dalam milidetik
let milidetik: number = waktu2 - waktu1;

// Mengonversi selisih milidetik menjadi hari
let _hari: number = 24 * 3600 * 1000; // 1 hari dalam milidetik
let selisihDetik: number = milidetik / _hari ;

let perbedaanDate = (( tanggal2.getTime() - tanggal1.getTime())/ _hari );

// Menampilkan hasil
console.log(
    "Perbedaan antara " + 
    tanggal1.toDateString() + " dan "+ 
    tanggal2.toDateString() + " adalah "+
    perbedaanDate + " hari.");