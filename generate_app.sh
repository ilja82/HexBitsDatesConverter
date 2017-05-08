#!/usr/bin/env bash

# Checkout 'generated' branch:
cd ..
rm -rf HexBitsDatesConverter_tmp && mkdir HexBitsDatesConverter_tmp && cd HexBitsDatesConverter_tmp
git clone https://github.com/ilja82/HexBitsDatesConverter.git
cd HexBitsDatesConverter
git checkout generated

# Delete previous code:
rm -rf *
rm .angular-cli.json .editorconfig .gitignore

ls -lah .
read -n1 -r -p "Check if only .git folder is shown! Then press any key to continue..." key

# Upgrade angular-cli:
#yarn global upgrade @angular/cli
yarn global remove @angular/cli
#yarn cache clean
yarn global add @angular/cli

#Build app:
cd ..
ng set --global packageManager=yarn
ng new HexBitsDatesConverter --routing --style=sass
cd HexBitsDatesConverter

yarn add @angular/material
yarn add @angular/animations
yarn add hammerjs
yarn add angular-calendar
yarn add moment

ng generate pipe BitsToHex
ng generate service NumberUtils


rm README.md

ls -lah .
read -n1 -r -p "Check if all project files are shown. Then press any key to continue..." key

# Commit & push all changes to GitHub
git add -A && git commit -m "automatically generated" && git push

# Remove temporary files:
cd ../.. && rm -rf HexBitsDatesConverter_tmp
