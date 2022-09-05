#!/usr/bin/env sh
set -e
yarn run build
cd dist
echo 'ramiiin.ir' > CNAME
git init
git add -A
git commit -m 'Deploy'
cd -