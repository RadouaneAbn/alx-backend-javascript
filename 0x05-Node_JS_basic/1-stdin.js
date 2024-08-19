process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  if (userName !== null) {
    process.stdout.write(`Your name is: ${userName}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
