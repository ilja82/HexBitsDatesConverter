#!/usr/bin/env bash

rm -rf dist
rm -rf docs

ng build --prod --output-path docs --base-href HexBitsDatesConverter
cp docs/index.html docs/404.html

ls -lah docs
read -n1 -r -p "Check if all GitHub pages are shown. Then press any key to continue..." key

git add -A && git commit -m "GitHub pages updated" && git push
