const fs = require('fs');
const path = require('path');
const { stdout } = process;
const dir = path.resolve(__dirname, 'secret-folder');

fs.readdir(dir, { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  files.forEach((elem) => {
    if (elem.isFile()) {
      const file = path.join(dir, elem.name);

      fs.stat(file, (err, stats) => {
        if (err) throw err;
        const fileInfo = path.parse(file);
        stdout.write(
            fileInfo.name +
            ' - ' +
            fileInfo.ext.slice(1) +
            ' - ' +
            (stats.size / 1024).toFixed(2) +
            'KB' +
            '\n',
        );
      });
    }
  });
});
