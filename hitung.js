
    // Data barang
    let barang = [
        {
            kode: "001", 
            nama: "A",
            harga: 10000  
        },
        {
            kode: "002", 
            nama: "B", 
            harga: 20000
        },
        {
            kode: "003",
            nama: "C", 
            harga: 30000
        }
        ];
        
        // Fungsi untuk mencari data barang
        function cariBarang(kode) {
        for(let i = 0; i < barang.length; i++) {
            if(barang[i].kode === kode) {
            return barang[i];
            }
        }
        return null;
        }
        
        function proses() {
        
          // Ambil data input
        let kode = document.getElementById("kode").value;  
        let jumlah = parseInt(document.getElementById("jumlah").value);
        
          // Cari data barang
        let dataBarang = cariBarang(kode);
        
          // Jika data barang tidak ditemukan
        if(!dataBarang) {
            alert("Kode barang tidak ditemukan!");
            return;  
        }
    
          // Hitung total harga
          let total = dataBarang.harga * jumlah;
        
          // Tampilkan total harga    
        alert("Total yang harus dibayar: Rp." + total); 
    
          // Ambil input pembayaran
        let bayar = parseInt(prompt("Uang yang dibayar:"));
    
          // Hitung kembalian
        let kembalian = bayar - total;
    
          // Tampilkan kembalian
        alert("Kembalian: Rp." + kembalian);
        
        }
    
