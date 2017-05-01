#!/usr/bin/env bash

rm -rf dist
rm -rf docs

ng build --prod -bh /HexBitsDatesConverter/

cd docs
git add -A && git commit -m "GitHub pages updated" && git push
cd ..
