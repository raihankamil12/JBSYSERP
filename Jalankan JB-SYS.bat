@echo off
title JB-SYS - Asset Management System - PT Jhonlin Baratama
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 goto NONODE

node server.js
goto END

:NONODE
echo.
echo   ==========================================================
echo    JB-SYS ^| PT Jhonlin Baratama
echo   ==========================================================
echo.
echo   Node.js tidak ditemukan di komputer ini.
echo.
echo   Anda tetap bisa memakai sistem: klik dua kali index.html
echo   Semua menu berfungsi normal, hanya tombol "Buka Lensa
echo   Kamera" yang tidak aktif. Gunakan ENTRI MANUAL untuk
echo   mengetik serial number unit.
echo.
echo   Agar kamera berfungsi, pasang Node.js dari nodejs.org
echo   lalu jalankan lagi berkas ini.
echo.
echo   ==========================================================
echo.
pause

:END
