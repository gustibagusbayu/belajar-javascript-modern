// spread operator

// const mhs = ['Bayu', 'Adi', 'Pramana']
// console.log(...mhs);

// menggabungkan 2 array
// const mhs = ['Bayu', 'Adi', 'Pramana']
// const dosen = ['Ade', 'Cahya', 'Kartika']
// const orang = [...mhs, 'Hah', ...dosen]
// const orang = mhs.concat(dosen) //bisa pakai ini tapi jika menambahkan data ditengah" 2 array gabisa
// console.log(orang);

// meng-copy array
// const mhs = ['Bayu', 'Adi', 'Pramana']
// const mhs1 = mhs //gabisa karena membuat referensi jika ditimpa array referencenya juga berubah
// const mhs1 = [...mhs]
// mhs1[0] = 'Ade'
// console.log(mhs);

// const liMhs = document.querySelectorAll('li')
// const mhs = []
// for(let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent)
// }
// const mhs = [...liMhs].map(m => m.textContent)
// console.log(mhs);

// .join('') -> menjadikan string ke huruf biasa
const nama = document.querySelector('.namas')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
nama.innerHTML = huruf;