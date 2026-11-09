# JB-SYS — Panduan Demo

**Asset Management System · PT Jhonlin Baratama**
Sistem Pemantauan Siklus Hidup & Logistik Unit Cylinder Alat Berat
*Powered by Andalan Fluid Sistem*

---

## 1. Cara menjalankan

Ada dua cara. Keduanya memakai data yang sama.

| Cara | Langkah | Kamera QR |
|------|---------|-----------|
| **Cepat** | Klik dua kali `index.html` | Tidak aktif — pakai Entri Manual |
| **Lengkap** | Klik dua kali **`Jalankan JB-SYS.bat`** | **Aktif** |

Gunakan cara **Lengkap** saat presentasi ke customer.

> **Kenapa harus lewat .bat?**
> Browser hanya mengizinkan akses kamera bila halaman dibuka lewat `https://` atau
> `localhost`. Berkas `.bat` menyalakan server kecil di `http://localhost:8099`
> lalu membuka browser otomatis. Tutup jendela hitamnya untuk berhenti.
> (Butuh Node.js terpasang. Jika belum ada, cara Cepat tetap bisa dipakai.)

### Membuka dari HP (satu jaringan WiFi)

1. Jalankan `Jalankan JB-SYS.bat` di komputer.
2. Cari IP komputer: buka Command Prompt → ketik `ipconfig` → lihat **IPv4 Address**
   (contoh `192.168.1.10`).
3. Di HP buka `http://192.168.1.10:8099`

Untuk demo di lokasi customer tanpa repot jaringan, gunakan **tautan privat** yang
sudah disiapkan (lihat bagian 7).

---

## 2. Akun demo

| Peran | Email | Password | Bisa apa |
|-------|-------|----------|----------|
| **Admin** | `admin@jbs.co.id` | `jbsys123` | Semua menu, termasuk data induk & pengguna |
| **Supervisor** | `spv@jbs.co.id` | `jbsys123` | Semua kecuali kelola akun pengguna |
| **Staff Gudang** | `gudang@jbs.co.id` | `jbsys123` | Dashboard, Asset, Form Mutasi, **Cek Kondisi**, Mutasi Asset, **Hour Meter** |

Di halaman login, klik salah satu baris pada kotak **Akun Demo** untuk mengisi
otomatis. Password semuanya huruf kecil: `jbsys123`

Login sebagai Staff Gudang adalah cara paling meyakinkan untuk menunjukkan
**pembatasan hak akses** — menu data induk (Product, Gudang, Alat Berat, Vendor,
Pengguna) dan menu Perbaikan hilang dengan sendirinya. Yang tetap ada justru
pekerjaan lapangannya: scan mutasi, cek kondisi, dan mengisi hour meter.

---

## 3. Yang baru setelah rapat manajemen

| Permintaan | Di mana |
|------------|---------|
| Total seluruh unit per model | Menu **Product** → kolom Distribusi, badge **TOTAL** |
| Rusak menunggu PO | Menu **Product** → **W/PO** |
| Klaim ke AFS | Menu **Product** → **CLAIM**; status unit **KLAIM GARANSI** |
| "On Repair" jadi WIP | Menu **Product** → **WIP** |
| Hapus kolom Jenis Cylinder | Sudah dihapus, diganti kolom **TJO** |
| Dashboard alat berat | Menu **Alat Berat** → cari → klik barisnya |
| Work Order (WO) | Diisi saat menekan **Selesaikan** di menu Perbaikan |
| Cari berdasarkan WO | Kolom pencarian menu **Asset** dan menu **Perbaikan** |
| WO + No. Alat Berat di log | Menu **Mutasi Asset** — kolom Slot diganti keduanya |
| Export Excel | Tombol **Export Excel** di setiap layar |

### Hasil rapat direksi

| Permintaan | Di mana |
|------------|---------|
| Urutan kolom umur pakai | Menu **Alat Berat** → detail: **HMI → JJO → TJO → THM → KJO** |
| Master data HMU alat berat | Menu baru **Hour Meter** — bisa diedit semua pengguna, dicari, diekspor |
| Cylinder Monitoring Condition | Menu baru **Cek Kondisi** — scan QR lalu isi ROD / HE / CE / General |

Tambahan dari form AFS yang dilampirkan:

- **Hour meter**: HMU (unit), HMI (saat pasang), TJO (target jam), JJO (jam berjalan),
  KJO (kelebihan jam), THM (target hour meter penggantian) — dihitung otomatis.
- **RC / WC**: tiap perbaikan ditandai Recondition (berbayar) atau Warranty Claim (klaim).
- **Service Condition as per Inspection**: tujuh titik periksa (Rod/Wiper, H/E, Port H/E,
  Flex H/E, Port C/E, Flex C/E, Other) diisi saat perbaikan ditutup.
- **Posisi cylinder** memakai penamaan lapangan: Outer Dump RH/LH, Inner Dump RH/LH,
  Jaw RH/LH, Cushion Hitch, Steering RH/LH, Boom, Arm, Bucket, Blade Lift, Tilt, Ripper.

### Menu Hour Meter

Daftar seluruh alat berat dengan HMU terkininya. Angka HMU diketik **langsung di
barisnya**, beberapa unit sekaligus, lalu tekan **Simpan Perubahan** satu kali —
cocok untuk petugas yang keliling mencatat hour meter.

- Bisa diakses **semua peran**, termasuk Staff Gudang.
- Begitu disimpan, perhitungan **JJO, KJO, dan THM** di menu Alat Berat langsung ikut berubah.
- Setiap pembaruan tercatat di log mutasi tiap cylinder yang terpasang pada unit itu.
- Baris yang diubah ditandai kuning sampai disimpan; bila angka baru lebih kecil
  dari sebelumnya, sistem meminta konfirmasi dulu.

### Menu Cek Kondisi (Cylinder Monitoring Condition)

Pengecekan rutin, alurnya sama seperti Form Mutasi: **scan QR atau ketik nomor seri**,
lalu muncul form penilaian.

| Nilai | Arti |
|-------|------|
| **1** | Cylinder OK |
| **2** | Not Ideal |
| **3** | Need Attention |
| **4** | Need Action |

Titik yang dinilai: **ROD · HE · CE · General**, ditambah catatan lapangan dan
foto kondisi (opsional, otomatis diperkecil sebelum disimpan).

- **Hanya untuk cylinder yang sedang terpasang di alat berat.** Unit di gudang atau
  di vendor akan ditolak beserta penjelasannya.
- Halaman utamanya menampilkan daftar unit terpasang: **terakhir dicek kapan**,
  sudah berapa hari, dan kondisi terakhirnya. Lewat 30 hari ditandai merah.
- Saat memeriksa satu unit, **riwayat pengecekan sebelumnya tampil di sebelah kiri**
  sehingga perkembangan kondisi terlihat — misalnya rod yang semula OK, lalu
  Not Ideal, lalu mulai rembes.
- Tab **Riwayat** memuat seluruh hasil pengecekan dan bisa diekspor.

> Data contoh sudah memuat cerita ini pada unit `CYL-BOOM-003`: tiga kali pengecekan
> dengan kondisi menurun bertahap. Pakai unit ini saat demo.

### Export Excel

Setiap layar punya tombol **Export Excel** di kanan atas. Hasilnya berkas `.xlsx`
asli — baris judul biru, kolom terkunci, filter otomatis, angka rupiah dan tanggal
sudah berformat, jadi langsung bisa di-pivot.

| Layar | Isi berkas |
|-------|------------|
| Dashboard | Ringkasan · Product · Alat Berat · Cylinder Terpasang |
| Dashboard → **Export Semua Data** | 12 lembar sekaligus (seluruh basis data) |
| Hour Meter | HMU tiap unit + siapa yang memperbarui |
| Cek Kondisi | Seluruh hasil pemeriksaan + nilai tiap titik |
| Product | Distribusi per model + TJO |
| Asset | Katalog unit + Cylinder Terpasang |
| Mutasi Asset | Log lengkap, **mengikuti filter yang sedang aktif** |
| Perbaikan | Tab yang dibuka + lembar Semua Perbaikan |
| Gudang | Daftar gudang + isi tiap gudang |
| Alat Berat | Daftar unit + seluruh cylinder terpasang |
| Alat Berat (detail) | Cylinder unit tersebut + riwayatnya |
| Vendor | Daftar rekanan + riwayat perbaikan |
| Pengguna | Daftar akun dan hak akses |

Nama berkas otomatis, contoh: `JB-SYS Mutasi Asset 2026-08-22.xlsx`

Yang perlu diingat: **ekspor mengikuti pencarian dan filter di layar.** Kalau menu
Mutasi Asset sedang disaring bulan Agustus, yang keluar hanya Agustus. Bersihkan
filter dulu bila ingin semuanya.

---

## 4. Alur demo 5 menit (urutan yang disarankan)

1. **Login** sebagai Admin → tunjukkan **Dashboard**: 17 unit, sebaran gudang /
   alat berat / perbaikan, dan kotak *Daftar Perbaikan Aktif di Vendor* —
   unit `CYL-BOOM-006` sudah **51 hari** di vendor, ditandai merah.
   *Inilah masalah yang paling dirasakan customer: unit tertahan tanpa ketahuan.*

2. **Asset** → klik `CYL-BOOM-001` → tunjukkan halaman riwayat: timeline lengkap
   dari registrasi, pasang di alat berat, rusak, kirim vendor, sampai kembali,
   berikut jeda waktu antar kejadian dan total biaya perbaikan.

3. Klik **QR Code** → **Cetak Label** → tunjukkan hasil cetak stiker.
   Jelaskan: label harus bahan tahan panas/oli, printer thermal transfer ribbon resin.

4. **Form Mutasi** → **Buka Lensa Kamera** → scan stiker QR yang sudah dicetak.
   Sistem langsung menampilkan identitas dan posisi unit, lalu pilihan tindakan
   yang **menyesuaikan status** unit tersebut.

5. Jalankan satu tindakan, misal *Rilis Gudang → Pasang Alat Berat*, pilih
   `EX-2401` posisi `Boom RH`, lalu isi hour meter unit saat itu.

6. Buka **Mutasi Asset** → tunjukkan baris log baru muncul lengkap dengan
   nama petugas, jam, rute, dan nomor LOG. *Tidak bisa dihapus.*

7. **Alat Berat** → ketik `EX-2401` → klik barisnya. Tunjukkan seluruh cylinder yang
   terpasang: posisi, nomor seri, WO, dan sisa jam operasi menuju target penggantian.
   *Inilah jawaban atas "di unit itu cylinder apa saja".*

8. **Asset** → ketik nomor WO (contoh `WO-69041`) → unit langsung ketemu tanpa
   perlu ingat nomor serinya.

9. **Perbaikan → tab Selesai**: biaya per unit, per vendor, durasi,
   dan pemisahan RC (berbayar) vs WC (klaim garansi).
   *Dasar angka untuk memutuskan perbaiki, klaim, atau ganti baru.*

10. Tutup dengan **Export Excel** di Dashboard → *Export Semua Data*.
    Buka berkasnya di depan customer: 10 lembar, siap dipivot.
    *Menjawab kekhawatiran "data kami nanti terkunci di aplikasi".*

---

## 5. Siklus lengkap yang bisa diperagakan

```
Registrasi unit  →  QR dicetak & ditempel  →  STOK SIAP PAKAI (RFU)
      ↓ scan
Pasang di alat berat            → DI ALAT BERAT (MCH)      · Siklus Pakai +1
      ↓ scan (rusak)
Turun ke gudang karantina       → RUSAK (KARANTINA)
      ↓ scan
Terbit PR                       → RUSAK (SUDAH PR)         · butuh PO
      ↓ scan
Terbit PO                       → RUSAK (SUDAH PO)         · siap kirim
      ↓ scan
Kirim ke vendor                 → WORK IN PROGRESS (WIP)    · durasi mulai jalan
      ↓ Selesaikan (isi WO, jenis RC/WC, biaya, inspeksi)
Perbaikan ditutup               → SELESAI PERBAIKAN        · Siklus Repair +1
      ↓ scan
Masuk gudang / pasang lagi      → kembali ke RFU atau MCH
```

Jalur cepat juga tersedia: dari alat berat **langsung ke vendor** bila dokumen
sudah siap, tanpa mampir ke gudang karantina. Bila kerusakan terjadi jauh di bawah
target jam operasi, unit dapat diajukan sebagai **klaim garansi (WC)** ke rekanan.

---

## 6. Hal yang sering ditanya customer

**"Kalau stikernya rusak atau kotor?"**
Buka menu Asset → ikon QR → unduh & cetak ulang. Nomor seri tidak berubah,
riwayat tetap utuh. Bisa juga pakai **Entri Manual** — ketik serial number.

**"Kalau tidak ada sinyal di pit?"**
Demo ini menyimpan data di perangkat, jadi tetap jalan. Untuk sistem sungguhan,
mode offline masuk daftar pengembangan lanjutan.

**"Datanya bisa diubah-ubah orang?"**
Log mutasi bernomor urut dan tidak bisa dihapus pengguna biasa. Data induk hanya
bisa disentuh Admin/Supervisor — buktikan dengan login sebagai Staff Gudang.

---

## 7. Catatan penting

- **Ini demo, bukan sistem produksi.** Data tersimpan di browser komputer/HP yang
  dipakai. Ganti browser atau perangkat = data kembali ke contoh awal. Tidak ada
  server pusat, sehingga data tidak dibagi antar pengguna.
- **Mengembalikan data ke kondisi awal:** login sebagai Admin → tombol
  **Reset Demo** di kanan atas. Lakukan ini sebelum meeting berikutnya agar
  tampilan kembali rapi.
- **Pada tautan privat (versi online):** tombol *Unduh Gambar PNG* tetap berfungsi —
  akan muncul konfirmasi penyimpanan berkas terlebih dahulu. Yang tidak tersedia
  hanya *Cetak Label*, karena halaman online tidak boleh membuka jendela cetak;
  untuk mencetak stiker gunakan berkas lokal. Gambar QR juga bisa ditekan-lama
  di HP lalu disimpan.
- Angka biaya, nama alat berat, pit, dan vendor pada demo adalah **contoh**.
  Sebelum presentasi, sesuaikan bila sudah ada data asli dari Jhonlin.

---

## 8. Untuk pengembang

```
index.html              hasil build — inilah yang dibagikan (mandiri, ±547 KB)
Jalankan JB-SYS.bat      launcher demo
server.js                server lokal port 8099
build.js                 gabungkan src/ menjadi index.html
src/app.js               logika sistem, data contoh, state machine status
src/styles.css           tampilan
src/index.template.html  kerangka
src/vendor/              qrcode-generator + jsQR (offline, tanpa CDN)
src/assets/              logo Jhonlin
```

Setelah mengubah apa pun di `src/`, jalankan:

```
node build.js
```

Seluruh berkas pendukung tertanam sebagai data URI, sehingga `index.html`
bisa dikirim sendirian lewat email/WhatsApp tanpa folder pendamping.
