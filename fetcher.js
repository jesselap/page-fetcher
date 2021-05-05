const request = require('request');
const fs = require('fs');

let domain = process.argv[2];
let path = process.argv[3];

if (path) {
  console.log("Path already exists");
} else {
  request(`${domain}`, (error, response, body) => {
  
    fs.writeFile(path, body, (err) => {
      console.log('error:', error)
      console.log('statusCode:', response && response.statusCode);
      fs.stat(path, (err, stats) => {
        if (err) throw err;
        console.log("Downloaded and saved " + stats.size
          + " bytes to " + path);
      });
    })
  });  
};



