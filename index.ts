
const _length = 5;
const _widht = 3;
const _perimeter = 1;
console.log(_length * _widht); //write a code to find area of rectangle no.1

console.log(_length * _widht + _perimeter);//write a code to find perimeter of rectangle no.2

// no 3 find diameter, circumference and area of a circle

let _radius = 5;
let _diameter = _radius*2 ;
let _lingkaran: number = 1 / 4 * 3.14159 * _diameter**2 ;
let _areaLingkaran: number = 2 * 3.14159 *_radius;

console.log("Diameter: " + _diameter + " | " 
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
let tahun: number = (totalhari - (totalhari % 365)) / 365;

// Menghitung sisa hari setelah tahun
let sisahariTahun: number = totalhari % 365;

// Menghitung jumlah bulan
let bulan: number = (sisahariTahun - (sisahariTahun % 30)) / 30;

// Menghitung sisa hari setelah bulan
let sisahariBulan: number = sisahariTahun % 30;

// Menampilkan hasil
console.log("Jumlah hari: "+ totalhari);
console.log("Jumlah tahun: "+ tahun);
console.log("Jumlah bulan: "+ bulan);
console.log("Jumlah hari: "+ sisahariBulan);

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
let _hari: number = 24 * 60 * 60 * 1000; // 1 hari dalam milidetik
let selisihDetik: number = milidetik / _hari ;

// Menggunakan kondisional untuk memastikan perbedaan selalu positif
let selisihHari: number = selisihDetik >= 0 ? selisihDetik : -selisihDetik;

// Menampilkan hasil
console.log("Perbedaan antara " + 
    tanggal1.toDateString() + " dan "+ 
    tanggal2.toDateString() + " adalah "+
    selisihHari + " hari.");