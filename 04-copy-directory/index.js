const fs = require('fs');
const path = require('path');

const sourceFolder = path.join(__dirname,"files");
const copyOfFolder = path.join(__dirname,"files-copy");

fs.mkdir (copyOfFolder, { recursive: true },(err) => {
    if (err) throw err;
});

fs.readdir(copyOfFolder, (err, files) => {
    if (err) throw err;  
    for (let file of files) {
      fs.unlink(path.join(copyOfFolder, file), err => {
        if (err) throw err;
      });
    }
  });

fs.readdir(sourceFolder, (err,files) => {
    if (err) throw err;
    files.forEach(file => {
        let copyOfFile = path.join(copyOfFolder,`${file}`)
        let sourceFile = path.join(sourceFolder,`${file}`)
        fs.createReadStream(sourceFile).pipe(fs.createWriteStream(copyOfFile));
    });
});