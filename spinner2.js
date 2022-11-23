const spinner = () => {

    process.stdout.write('hello from spinner2.js... \rheyyy\n');
  
    const rotate = '|/-\\';
  
    let cycle = 1;
    while (cycle <= 8) {
      const direct = rotate[cycle % rotate.length];
      setTimeout(() => {
        process.stdout.write(`\r${direct}   `);
      }, 166 * cycle);
      cycle ++;
    }
  };
  spinner();