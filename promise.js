// fetch
// fetch('http://www.omdbapi.com/?apikey=4c0c6cce&s=avengers')
//  .then(response => response.json())
//  .then(response => console.log(response))

// promise -> object yg merepresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous dimasa yang akan datang
// janji -> terpenuhi / ingkar janji
// states(fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then -> kalau terpenuhi / catch -> kalau tidak terpenuhi)

// contoh 1
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//   if(ditepati) {
//     resolve('janji telah ditepati')
//   } else {
//     reject('Ingkar janji')
//   }
// })

// janji1
//   .then(response => console.log('OK ' + response))
//   .catch(response => console.log('NOT OK : ' + response))

// contoh 2
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//   if(ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!')
//     }, 2000)
//   } else {
//     setTimeout(() => {
//       resolve('Tidak ditepati setelah beberapa waktu!')
//     }, 2000)
//   }
// })

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('Selesai menunggu')) //matiin animasi loading saat finally dijalankan
//   .then(response => console.log('OK ' + response))
//   .catch(response => console.log('NOT OK : ' + response))
// console.log('selesai');

//Promise.all
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Bebas',
      sutradara: 'Bayu',
      pemeran: 'Adi, Pramana'
    }])
  }, 1000)
})

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Denpasar',
      temperatur: 27,
      kondisi: 'Cerah berawan'
    }])
  }, 500)
})

// cara biasa
// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))

// dengan Promise.all
Promise.all([film, cuaca])
  // .then(response => console.log(response)) //jadi 1 array
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })