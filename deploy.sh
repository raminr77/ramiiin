#!/usr/bin/env sh
set -e
yarn run build
cd dist
echo 'ramiiin.ir' > CNAME
git init
git add -A
git commit -m 'Deploy'
git push -f https://github.com/raminr77/ramiiin.git main:production
cd -