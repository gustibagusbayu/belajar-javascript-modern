// callback
// synchronous callback
// function halo(nama){
//     alert(`Halo, ${nama}`)
// }
// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama : ')
//     callback(nama)
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`))

// const mhs = [
//     {
//         "nama": "Bayu",
//         "nim": "1708561051",
//         "email": "bayu@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Adi",
//         "nim": "1708561052",
//         "email": "adi@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Pramana",
//         "nim": "1708561053",
//         "email": "pramana@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     }
// ];
// console.log('Mulai');
// mhs.forEach(m => {
//     for(let i = 0; i<10;i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// })
// console.log('Selesai');


// Asynchronous callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response)
//             } else if(xhr.status === 404) {
//                 error()
//             }
//         }
//     }
//     xhr.open('get', url)
//     xhr.send()
// }

// console.log('Mulai');
// getDataMahasiswa('mhs.json', result => {
//     const mhs = JSON.parse(result)
//     mhs.forEach(m => console.log(m.nama))
// }, () => {

// })
// console.log('Selesai');

// kalau pakai jquery
console.log('mulai');
$.ajax({
    url: 'mhs.json',
    success: (mhs) => {
        mhs.forEach(m => {
            console.log(m.nama);
        })
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai');