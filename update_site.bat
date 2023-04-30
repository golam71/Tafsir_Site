@echo off
cd app
call npm run build
cd ../update_site
python update_site.py "72.167.57.45" "waseem@fussilat.com" "FileZ#2022" "public_html/test2.fussilat.com/"