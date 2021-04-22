// Tagged Templates
// const nama = 'Bayu Adi';
// const umur = 22;

// function coba(strings, ...values){
//     // let result = ''
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str )

// hightlight
const nama = 'Bayu Adi';
const umur = 22;
const email = 'bayuadi@gmail.com'

function hightlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = hightlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;
document.body.innerHTML = str