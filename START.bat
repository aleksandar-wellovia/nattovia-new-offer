@echo off
cd /d "%~dp0"
start "" http://localhost:8080/products/nattokinase
node serve.js
