# MPC volumio adapter
This is a small utility to use the command line tools of mpc, when using a volumio server.

Recently, i switched from mpd to volumio as a music player but still had to use the command line tools to load playlists and start playback.
So i wrote this small adapter.

If you somehow should be in the same situation, feel free to use and/or expand or adapt this to your needs.

## Installation
Clone the repo and install the dependencies.
Then, just put the mpc.js into your path named `mpc`, or use the install script as sudo:
```
git clone https://github.com/PygmalionPolymorph/mpc-volumio-adapter.git
cd mpc-volumio-adapter
npm install
```
then
```
sudo ./install
```
or
```
sudo ln -s "${PWD}/mpc.js" /usr/local/bin/mpc
```

## Usage
Currently, this only supports loading playlists by exact name, clearing the play queue and starting playback:
```
mpc load <playlistname>
mpc play
mpc clear
```

## License
Copyright 2017 PygmalionPolymorph

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
