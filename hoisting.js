// execution context, hoisting dan scope
console.log(nama);
var nama = 'bayu';

// ada 2 phase yaitu creation phase yaitu proses pembuatan elemen
//yaitu pengecekan pada global dan jika tidak ditemukan maka akan berlaku
// untuk var akan dibuat nama var = undefined
// untuk function = fn()
// ini yang dinamakan hoisting yaitu diambil keatas lagi walau belum ada elemen yang dibuat

// execution phase
// baru eksekusi code

// kalau ada variabel atau function pasti hoisting dulu
// jika ada variabel di function artinya dicari dlu di dalam function, kalau engga ada di argumen input kalau gaada lagi ya di variabel global