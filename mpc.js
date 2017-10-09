#!/usr/bin/env node

const request = require('request');

/* Constants */
const host = 'http://127.0.0.1';
const baseUrl = `${host}/api/v1/`;

/* Request wrapper */
const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}

/* Help */
const showHelpText = () => {
  console.log('Usage: mpc [load <playlist>|play]');
  process.exit(1);
}

/* Commands */

// Playlists
const playlistUrl = (playlist) => `${baseUrl}/commands/?cmd=playplaylist&name=${playlist}`;
const playPlaylist = (playlist) => makeRequest(playlistUrl(playlist));

// Clear Queue
const clearQueue = () => makeRequest(`${baseUrl}/commands/?cmd=clearQueue`);

// Start playing
const play = () => makeRequest(`${baseUrl}/commands/?cmd=play`);


/* Entry point */
const main = (args) => {
  switch(args[0]) {
    case 'load':
      if (args.length != 2) showHelpText();
      clearQueue().then(playPlaylist(args[1]));
      break;
    case 'play':
      play();
      break;
    default:
      showHelpText();
  }
}

if (process.argv.length <= 2) showHelpText();
main(process.argv.slice(2))
