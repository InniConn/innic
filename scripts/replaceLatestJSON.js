const fs = require('fs');
const path = require('path');

const latestFile = path.join(__dirname, '../latest/latest.json');

const version = process.env.VERSION

console.log('verison',version)
fs.readFile(latestFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    data = data.replace(/https:\/\/github.com\/InniConn\/innic\/releases\/download\/\d+\.\d+\.\d+\//g, `https://inniconn.innic.app/${version}/`);
    fs.writeFile(latestFile, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('latest.json updated');
    });
});