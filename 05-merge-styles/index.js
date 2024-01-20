const fs = require('fs');
const path = require('path');

const sourceFolder = path.resolve(__dirname, 'styles');
const createdFolder = path.resolve(__dirname, 'project-dist', 'bundle.css');

fs.readdir(sourceFolder, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (file.isFile && file.name.split('.').pop() == 'css') {
      let sourceFile = path.resolve(sourceFolder, `${file.name}`);
      fs.createReadStream(sourceFile, 'utf8').pipe(
        fs.createWriteStream(createdFolder, { flags: 'a' }),
      );
    }
  });
});
