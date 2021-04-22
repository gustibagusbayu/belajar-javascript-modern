class Mahasiswa {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    tidur(jam){
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let bayu = new Mahasiswa('bayu', 10)