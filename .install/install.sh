#bin/bash

set -e -u

echo clone the repo 
git clone https://github.com/G1A1B1E/music

echo cd into the repo 
cd music 

echo edit the html 
cat index.html 

echo locate the files
ls 

echo cd into the root repo 
cd ~

echo npm 
npm install

echo npm start 
npm run


echo description 
echo Music
echo The best site for displaying the best music and playlists!
echo look for a secret on the page 
echo give it a second for the page to load

if command -v yarn >/dev/null 2>&1 ; then
  yarn install
else
  cat 1>&2 << 'EOA'   

Uh oh! We couldn't find 'yarn' installed on your system.

You should first install 'yarn' on your system. 


EOA
  exit 1
fi

cat <<-'EOM'

And the changes should be applied upon saves!

EOM

# {
#  "image": "mcr.microsoft.com/devcontainers/universal:2",
#  "features": {
#  }
#}

