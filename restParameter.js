// function myFunc(...args){
//     return args
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
    // let total = 0
    // for(let a of angka){
    //     total += a
    // }
    // return total

    // return angka.reduce((hasil, a,) => hasil += a)
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Bayu', 'Ade', 'Cahya', 'Pramana']
// const [ketua, wakil, ...anggota] = kelompok1
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'Bayu',
//     frontEnd1: 'Adi',
//     frontEnd2: 'Pramana',
//     backEnd1: 'Ade',
//     ux: 'Cahya',
//     devOps: 'Kartika'
// }

// const {pm, ...myTeam} = team
// console.log(myTeam);

// filtering
function filterBy(tipe, ...values) {
    return values.filter(v => typeof v === tipe)
}

console.log(filterBy('string', 1, 2, 'Adi', true, false, 11));
