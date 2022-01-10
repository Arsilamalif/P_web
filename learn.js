// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber)
window.alert('Angka favorit saya adalah : ' + myNumber)
window.alert(`Angka favorit saya adalah : ${myNumber}`)



let x = 8 //membuat variable x
let y = 4 //membuat variable y
console.log(x, y)//menampilkan x dan y
console.log('x + y =', x + y)//menambahkan nilai x dan y
console.log('x - y =', x - y)//mengurangi nilai x dan y
console.log('x * y =', x * y)//mengalikan x dan y
console.log('x / y =', x / y)//membagikan x dan y
console.log('x % y =', x % y)//sisa dari pembagian x dan y
console.log('x++ =', x++)//menjumlahkan variable x itu sendiri
console.log('++x =', ++x)//menambahkan nilai x kemudian mengembalikan nilai x
console.log('x-- =', x--)//kebalikan dari ++x
console.log('--x =', --x)//kebalikan dari x++


let a = 8//menampilkan variable a 
let b = 4//menampilkan variable b
console.log(a, b)//menampilkan variable a dan b
console.log('a > b =', a > b)//menunjukkan bahwa a lebih besar daripada b
console.log('a < b =', a < b)//menunjukkan bahwa a lebih kecil daripada b
console.log('a >= b =', a >= b)//menunjukkan bahwa a besar sama dengan b
console.log('a <= b =', a <= b)//menunjukkan bahwa a kecil sama dengan b
console.log('a == b =', a == b)//menunjukkan bahwa a sama dengan b
console.log('a != b =', a != b)//menunjukkan bahwa a tidak sama dengan b
console.log('a === b =', a === b)//menunjukkan bahwa a sama dengan b
console.log('a !== b =', a !== b)//menunjukkan bahwa a tidak sama dengan b



console.log('true && true =', true && true)//menampilkan bahwa hasil true jika keduanya true
console.log('true && false =', true && false)//jika a true dan b false maka akan menampilkan false
console.log('false && true =', false && true)//jika a false dan b true maka tetap false
console.log('false && false =', false && false)//jika keduanya false maka tetap false
console.log('true || true =', true || true)//jika keduanya true makan akan tetap true
console.log('true || false =', true || false)//jika a true dan b false maka akan menampilkan true
console.log('false || true =', false || true)//jika a false dan b true maka akan menampilkan false
console.log('false || false =', false || false)//jika keduanya false maka akan tetap false
console.log('!true =', !true)//jika nottrue maka akan menampilkan false
console.log('!false =', !false)//jika notfalse maka akan menampilkan true


function hitungLuasPersegi(s) { //befungsi menghitung luas persegi
    var luas = s * s //mengalikan sisi dengan sisi
    return luas //return luas
  }
  var hasil = hitungLuasPersegi(5)//set nilai sisi menjadi lima
  console.log(hasil)//menampilkan hasil luas persegi



function luasSegitiga(a,t) { //berfungsi membuat luas segitiga
    var l2=(a * t) / 2 //membuat rumus alas * tinggi / 2
    return l2 //return variable 12
  }
  var h2=luasSegitiga(3,4)//set nilai dari a dan t
  console.log(h2)//menampilkan hasil dari luas segitiga



function volumeBalok(p,l,t){ //berfungsi menghitung volume balok
      var v=(p * l * t) //membuat variable v
      return v//return dari v

  }
  var h3=volumeBalok(4,4,4)//set nilai dari p,l,t
  console.log(h3)//menampilkan hasil volume balok


var namahewan = ["Hiu","bebek","kangguru","toman","zebra","kudanil","singa"] // memebuat array
console.log(namahewan[0]); // Menampikan Array 0
console.log(namahewan[1]); // Menampikan Array 1
console.log(namahewan[2]); // Menampikan Array 2
console.log(namahewan[3]); // Menampikan Array 3
console.log(namahewan[4]); // Menampikan Array 4
console.log(namahewan[5]); // Menampikan Array 5
namahewan[1]="cupang"; //mengganti array 1 menjadi cupang
console.log(namahewan); // menampilkan array 

namahewan.push("harimau"); //menambah array baru "harimau"
console.log(namahewan); // menampilkan array 

namahewan.pop("cupang"); // melihat dan menghapus item dari Array
console.log(namahewan); // menampilkan array 

console.log('Panjang Array = ', namahewan.length); // menghitung panjang Array

namahewan.unshift("macan"); // menambah macan di awal Array
console.log(namahewan); // menampilkan array 

namahewan.shift(); // menampilkan dan menghapus item awal dari array
console.log(namahewan); // menampilkan array 

console.log(namahewan.sort()); // mengurutkan Array
console.log(namahewan); // menampilkan array 


let pasien = {
    firstName: "Andrian",//membuat variable firstname
    lastName : "ArsilamalifAkbar",//membuat variable lastname
    tanggallahir : "27-01-01",//membuat variable tanggal lahir
    nokamar : "16",//membuat variable nomor kamar
    nopasien :"001",//membuat variable nomor pasien
    fullName : function() {//membuat fungsi fullname
    return this.firstName + " " + this.lastName;//menggabungkan firstname dan lastname
    }
    };

console.log(pasien.firstName);//menampilkan firstname Dot Notation 
console.log(pasien.lastName);//menampilkan lastname Dot Notation 
console.log(pasien.tanggallahir);//menampilkan tanggal lahir Dot Notation 
console.log(pasien.nokamar);//menampilkan nomor kamar Dot Notation 
console.log(pasien.nopasien);//menampilkan nomor pasien Dot Notation 
console.log(pasien.fullName());//menampilkan pasien Dot Notation 

console.log(pasien["firstName"]);//menampilkan firstname Bracket Notation
console.log(pasien["lastName"]);//menampilkan lastName Bracket Notation
console.log(pasien["tanggallahir"]);//menampilkan tanggal lahir Bracket Notation
console.log(pasien["nokamar"]);//menampilkan nomor kamarBracket Notation
console.log(pasien["nopasien"]);//menampilkan nomor pasien Bracket Notation
console.log(pasien["fullName"]());//menampilkan pasien Bracket Notation




console.log(0.1 + 0.2 == 0.3)//hasil dari 0.1 + 0.2 = 0.300000000000000004 jika di hitung, maka tidak sama dengan 0.3 karaena itu hasilnya false
console.log(1 + "1")//hasilnya 11 karna 1 numerik dijumlahkan dengan 1 string
console.log(1 - "1")//hasilnya 0 karna 1 numerik dikurangi dengan 1 string
console.log(1 < 2 < 3)//1 lebih kecil dari 2 hasilnya true, maka true lebih kecil dari 3 hasilnya true
console.log(3 > 2 > 1)//3 lebih besar dari 2 hasilnya false, false lebih besar dari 1 maka hasilnya false
console.log(null == 0)//nilainya false karna null tidak memiliki arti
console.log(null > 0)//nilainya false karna null tidak memiliki arti
console.log(null >= 0)//nilainya true karna null tidak memiliki arti