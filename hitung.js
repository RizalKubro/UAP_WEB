let barang = [
    {kode : "001", nama: "A", harga: "10000"
    },
    {kode : "002", nama: "B", harga: "20000"
    },
    {kode : "003", nama: "C", harga: "30000"
    }   
]

function cariBarang(){
    for(let i = 0; i < barang.length; i++){
        if(barang[i].kode == kode){
            return barang[i]
        }
    }
    return null;
}

function proses(){
    let kode = document.getElementById("kode").value;
    let jumlah = parseInt(document.getElementById("jumlah").value);

    let dataBarang = cariBarang(kodo);

    if(!dataBarang){
        alert("kode barang tidak ditemukan");
        return;
    }
    let total = dataBarang.harga * jumlah;

    alert("Total yang harus dibayar: RP"+total);

    let bayar = parseInt(prompt("Uang yang dibayar"));

    let kembalian = bayar - total;

    alert("kembalian: Rp"+ kembalian)
}
