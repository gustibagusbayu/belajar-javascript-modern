// const coba = [51, 22, 'bayu']

// // skipping
// const [nim, , namas] = coba

// console.log(nim)
// // console.log(umurs)
// console.log(namas)


// // swap
// let a = 1;
// let b = 2;
// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// // return value pada function
// function cobas() {
//     return [1, 2];
// }

// const [as, bs] = cobas();
// console.log(as);
// console.log(bs);

// rest parameter
// const [a, ...args] = [1, 2, 3]
// console.log(a);
// console.log(args);

// object
// const mhs = {
//     nama: 'Bayu',
//     umur: 22
// }

// const {nama, umur} = mhs
// console.log(nama)
// console.log(umur)

// asigment tanpa deklarasi
// ({nama, umur} = {nama: 'Bayu', umur: 22})
// console.log(nama);

//assign ke variabel baru
// const mhs = {
//     nama: 'Bayu',
//     umur: 22
// }
// const {nama: n, umur: u} = mhs
// console.log(n)
// console.log(u)

// memberi nilai default
// const mhs = {
//     nama: 'Bayu',
//     umur: 22,
//     email: 'bayu@gmail.com'
// }
// const {nama, umur, email = 'email@default.com'} = mhs
// console.log(nama)
// console.log(umur)
// console.log(email)

// rest parameter
// const mhs = {
//     nama: 'Bayu',
//     umur: 22,
//     email: 'bayu@gmail.com'
// }
// const {nama, ...args} = mhs
// console.log(args.umur)

// mengambil field paa object stelah dikirim sebagai parameter untuk function

const mhs = {
    nama: 'Bayu',
    umur: 22,
    email: 'bayu@gmail.com'
}
function getMhs({umur}) {
    return umur
}

console.log(getMhs(mhs));