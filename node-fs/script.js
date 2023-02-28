import fs from 'fs';

// is asynchrounus so it has the callback function
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    throw (err);
  }

  console.log('Async', data.toString('utf-8'));
})

// works like readfile, however is syncronus and tells js to wait until its done
const file = fs.readFileSync('./hello.txt')
console.log('Sync', file.toString())