const Tabletop = require('tabletop');

//  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1DpRZ4IA6Xd_rd4sNnkpuTkp_-6KOEJJWS-VqZxw4oU0/edit?usp=sharing';

// function init() {
//     Tabletop.init( { key: publicSpreadsheetUrl,
//                      callback: showInfo,
//                      simpleSheet: false } )
//   }

//  function showInfo(data, tabletop) {
//   // do something with the data
//   console.log(JSON.stringify(data, null, 2));
// }

//initialise and kickstart the whole thing.
// init();

let getData = new Promise((resolve, reject) => {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1DpRZ4IA6Xd_rd4sNnkpuTkp_-6KOEJJWS-VqZxw4oU0/edit?usp=sharing',
        simpleSheet: true
    })
    .then((data, tabletop) => {
        // resolve(data);
        resolve({
            "images": [{
              "src": "",
              "alt": "Image one alt text"
            }]
          });
    })
    .catch(err => {
        reject(err);
    })
});

module.exports = getData;