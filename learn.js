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