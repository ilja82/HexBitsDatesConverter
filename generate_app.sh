#!/usr/bin/env bash

# Checkout 'generated' branch:
cd ..
rm -rf HexBitsDatesConverter_tmp
mkdir HexBitsDatesConverter_tmp
cd HexBitsDatesConverter_tmp
git clone https://github.com/ilja82/HexBitsDatesConverter.git
cd HexBitsDatesConverter
git checkout generated
rm -rf *
cd ..

# Re-install latest angular-cli:
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest

#Build app:
ng new HexBitsDatesConverter
cd HexBitsDatesConverter

# Commit all to GitHub
git add -A
git commit -m "automatically generated"
git push

# Remove temporary files:
cd ../..
rm -rf HexBitsDatesConverter_tmp
