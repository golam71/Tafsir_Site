@echo off
cd app
npm run build
cd ../update_site
python update_site.py "ftp_host" "username" "password" "remote_directory"