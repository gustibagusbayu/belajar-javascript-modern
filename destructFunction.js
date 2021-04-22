// Destructuring

// function kalkulasi(a, b){
//     return [a + b, a - b, a * b, a / b]
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3)
// console.log(jumlah);

// const [jumlah, kurang, kali, bagi = 'Tidak ada'] = kalkulasi(2, 3)
// console.log(jumlah);

// function kalkulasi(a, b){
//     return {
//         tambah: a + b, 
//         kurang: a - b, 
//         kali: a * b, 
//         bagi: a / b}
// }
// const {tambah, kurang, kali, bagi = 'Tidak ada'} = kalkulasi(2, 3)
// console.log(tambah);

// Destructure function arguments
const mhs1 = {
    nama: 'Bayu',
    umur: 22,
    email: 'bayu@gmail.com', 
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs1.nama}, saya berumur ${mhs1.umur} tahun.`
// }
// dengan destructuring
function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`
}

console.log(cetakMhs(mhs1))