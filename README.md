# Angular Chrome Extension
Chrome Extension developed in Angular &amp; TypeScript.

# Prerequisites
Project was developed using Angular CLI and it's recommended to install it to run the project. Please visit [Angular CLI github](https://github.com/angular/angular-cli) for more details.

Also install the following gulp dependencies which are required to package the content script for the Chrome Extension.
*  `npm install -g gulp-cli`
*  `npm install 'gulpjs/gulp.git#4.0' --save-dev`

Similarly, for
*  `gulp-typescript`
*  `gulp-sourcemaps`
*  `gulp-uglify`
*  `browserify`
*  `vinyl-source-stream`
*  `vinyl-buffer tsify`

# Build & Run
To build and run the project you need to do the following:

Run the following commands in sequence:
*  `npm install`
*  `ng serve`
*  `gulp`

Then,
*  Add the Unpacked Extension from 'dist' folder. You need to enable 'Developer Mode' in your Chrome Browser Extension window in order to do this.
*  Open http://localhost:4200/ in your browser where your angular app is running.
*  Keep the browser's developer tools opened to see messages in the console.
*  Click on the extension icon on the top right corner of your browser.