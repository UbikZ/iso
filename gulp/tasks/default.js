'use strict';

import gulpCore from 'gulp';
import gulpHelp from 'gulp-help';

export default (() => {
  const gulp = gulpHelp(gulpCore);

  gulp.task('default', 'Runs build and starts watch tasks', [/* */]);
})();
