'use strict';

import { exec } from 'child_process';

export default (error) => {
  const args = Array.prototype.slice.call(arguments);

  console.log(error.message);

  exec(['eval $(notify-send "Compile Error" "', error.message, '")'].join(''),
    function (error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log(error);
      }
    });

  this.emit('end').bind(this);
};
