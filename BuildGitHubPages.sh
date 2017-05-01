#!/usr/bin/env bash

rm -rf dist
rm -rf docs

ng build --prod -bh /HexBitsDatesConverter/

mv dist docs

ls -lah docs
read -n1 -r -p "Check if all GitHub pages are shown. Then press any key to continue..." key

git add -A && git commit -m "GitHub pages updated" && git push
