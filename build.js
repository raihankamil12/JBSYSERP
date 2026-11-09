/* =====================================================================
   JB-SYS — build script
   Menggabungkan seluruh sumber menjadi satu berkas index.html mandiri.

   Jalankan:  node build.js
   ===================================================================== */

const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "src");
const OUT = path.join(__dirname, "index.html");

function read(p) {
  return fs.readFileSync(path.join(SRC, p), "utf8");
}
function dataURI(p, mime) {
  const b = fs.readFileSync(path.join(SRC, p));
  return "data:" + mime + ";base64," + b.toString("base64");
}

// Placeholder diganti lewat fungsi agar "$&", "$1" dsb. di dalam
// isi berkas tidak diproses sebagai pola pengganti oleh String.replace.
function put(tpl, token, value) {
  if (tpl.indexOf(token) < 0) throw new Error("Token tidak ditemukan: " + token);
  return tpl.split(token).join(value);
}

let html = read("index.template.html");

html = put(html, "__STYLES__", read("styles.css"));
html = put(html, "__QRCODE_LIB__", read("vendor/qrcode.min.js"));
html = put(html, "__JSQR_LIB__", read("vendor/jsQR.min.js"));
html = put(html, "__XLSX_LIB__", read("xlsx.js"));
html = put(html, "__APP__", read("app.js"));
html = put(html, "__LOGO_MARK__", dataURI("assets/logo-mark.png", "image/png"));
html = put(html, "__LOGO_FULL__", dataURI("assets/logo-full.png", "image/png"));

fs.writeFileSync(OUT, html, "utf8");

const kb = (Buffer.byteLength(html, "utf8") / 1024).toFixed(0);
console.log("OK  index.html dibuat — " + kb + " KB (mandiri, tanpa koneksi internet)");
