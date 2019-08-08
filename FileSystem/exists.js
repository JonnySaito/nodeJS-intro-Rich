const fs = require(`fs`);

//CHECK WITH .access
// const fsPromises = fs.promises;
// const fsConstants = fs.constants;
//
// checkAccess = (filepath, constant, permission) => {
//   fsPromises.access(filepath, constant)
//   .then(() => console.log(`checked ${filepath}, ${permission} okay`))
//   .catch(() => console.error(`checked ${filepath}, ${permission} not okay`))
// }
//
// checkAccess(`message.txt`, fsConstants.F_OK, 'file');
// checkAccess(`message.txt`, fsConstants.R_OK, 'read');
// checkAccess(`message.txt`, fsConstants.W_OK, 'write');
// checkAccess(`message.txt`, fsConstants.X_OK, 'execute');

//CHECK WITH .existsSync
if (fs.existsSync('message.txt')) {
  console.log('The file exists.');
}
