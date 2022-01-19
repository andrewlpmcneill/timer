const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {

  if (Number(key) < 10 && Number(key) > 0) {
    console.log(`Setting timer for ${key} seconds...`);
    const time = Number(key);
    setTimeout(() => process.stdout.write('\x07'), time * 1000);
  }

  switch (key) {
  case '\u0003':
    console.log('Thanks for using me, ciao!');
    process.exit();
    break;
  case 'b':
    process.stdout.write('\x07');
    break;
  }

});