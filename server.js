/* =====================================================================
   JB-SYS — server lokal untuk demo
   Menyajikan index.html lewat http://localhost:8099 agar browser
   mengizinkan akses kamera (getUserMedia butuh localhost / HTTPS).

   Jalankan lewat "Jalankan JB-SYS.bat", atau: node server.js
   ===================================================================== */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const PORT = 8099;
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".md": "text/plain; charset=utf-8"
};

const server = http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split("?")[0]);
  if (rel === "/") rel = "/index.html";

  // jangan izinkan keluar dari folder aplikasi
  const file = path.join(ROOT, path.normalize(rel).replace(/^(\.\.[\/\\])+/, ""));
  if (!file.startsWith(ROOT)) {
    res.writeHead(403); res.end("Akses ditolak"); return;
  }

  fs.readFile(file, (err, buf) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Berkas tidak ditemukan: " + rel);
      return;
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(buf);
  });
});

server.on("error", (e) => {
  if (e.code === "EADDRINUSE") {
    console.log("\n  Port " + PORT + " sedang dipakai.");
    console.log("  Kemungkinan JB-SYS sudah berjalan di jendela lain.");
    console.log("  Buka saja: http://localhost:" + PORT + "\n");
  } else {
    console.log("\n  Gagal menjalankan server: " + e.message + "\n");
  }
  setTimeout(() => process.exit(1), 6000);
});

server.listen(PORT, () => {
  const url = "http://localhost:" + PORT;
  console.log("");
  console.log("  ==========================================================");
  console.log("   JB-SYS  |  Asset Management System");
  console.log("   PT Jhonlin Baratama");
  console.log("  ==========================================================");
  console.log("");
  console.log("   Alamat   : " + url);
  console.log("   Login    : admin@jbs.co.id  /  jbsys123");
  console.log("");
  console.log("   Kamera pemindai QR AKTIF pada alamat ini.");
  console.log("   Untuk membuka lewat HP, pastikan HP satu jaringan WiFi,");
  console.log("   lalu ganti 'localhost' dengan alamat IP komputer ini.");
  console.log("");
  console.log("   Tutup jendela ini untuk menghentikan server.");
  console.log("  ==========================================================");
  console.log("");

  // "node server.js --no-open" menjalankan server tanpa membuka browser
  if (process.argv.indexOf("--no-open") >= 0) return;
  exec('start "" "' + url + '"', (e) => {
    if (e) console.log("  Buka browser secara manual ke: " + url);
  });
});
