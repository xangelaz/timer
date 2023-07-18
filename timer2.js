const input = process.argv.slice(2);

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});

const timerAlarm = function() {
  for (const sec of input) {
    const beep = parseFloat(sec);
    if (!isNaN(beep) && beep >= 0) {
      console.log(`setting timer for ${sec} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beep * 1000);
    }
    if (sec === "b") {
      process.stdout.write('\x07');
    }
  }
};

timerAlarm(input);