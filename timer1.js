'use strict'

const args = process.argv.slice(2);

for (let a = 0; a < args.length; a++) {yes
  if (args[a] === undefined) {
    continue;
  } else if (args[a] < 0) {
    continue;
  } else if (isNaN(args[a])) {
    continue;
  }
  else {
    setTimeout(() => {
      process.stdout.write('\x07');
      //console.log(args[a]);
    }, args[a]);
  }
};
