const input = process.argv.slice(2);

const timerAlarm = function() {
  for (const sec of input) {
    const beep = parseFloat(sec);
    if (!isNaN(beep) && beep >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beep * 1000);
    }
  }
};

timerAlarm(input);