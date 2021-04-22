// for .. of
// const mhs = ['Bayu', 'Adi', 'Pramana']

// mhs.forEach(m => console.log(m))

// for(const m of mhs){
//     console.log(m);
// }

// strings
// const nama = 'Bayu'
// for(const n of nama){
//     console.log(n);
// }

// const mhs = ['Bayu', 'Adi', 'Pramana']
// mhs.forEach((m, i) => console.log(m, i))

// gakbisa pakai index for of tapi boleh tambahin entries() biar bisa
// for(const [i,m] of mhs.entries()){
//     console.log(i, m)
// }

// Nodelist -> hasil query dari DOM lihat isi dengan innerHTML atau textContent
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(m => console.log(m.innerHTML))
// for (n of liNama){
//     console.log(n.innerHTML);
// }

// Arguments -> parameter pada function yang tidak ditangkap disimpan di arguments
// function jumlahAngka() {
//     let jumlah = 0
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

// for in untuk mereturn isi dari object

const mhs = {
    nama: 'Bayu',
    umur: 22
}

for (m in mhs){
    console.log(mhs[m]);
    console.log(m);
}