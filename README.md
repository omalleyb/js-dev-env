# js-dev-env
JS development environment

__git commands__

`git clone https://github.com/omalleyb/js-dev-env`

`git pull origin master` if something changes in git, and you need it locally

`git add .` iadd files not in source control to github

`git commit -m "my comments here about my code"`  commit locally

`git push` to push changes to github or `git push origin master --force` if local changes to overwrite a change in github

__npm commands__
`npm install`, `npm list`, `npm outdated`, `npm install <package name> --g or s for local`

change / update package.json to update packages use ^ or ~ to keep packages up to date and check periodically.




1.) grab editorconfig settings for your IDE on editorconfig.org

2.) setup "nsp check" to verify packages are cool - no known vulnerabilities : <code>npm install -g nsp</code> ...then... <code>nsp check</code> at command line

3.) setup development wb server ... Express JS.  Express should setup in srcServer.js within the buildScripts directory.  
>(Setup BrowserSync for multi device testing, not covered in this project.)

4.) put source code in **src** directory.  Put index.html here

5.) try _localtunnel_ `npm install -g localtunnel`, run `lt --port 3000`  this open a hole to expose outside to mapped port for testing.  Create npm start script, start app, open second prompt to run `lt --port 300 --subdomain brian`

6.) try _now_ for sharing progress, uploads project to cloud and returns URL for testing `pm install -g now`  Need npm start script like local tunnel.

7.) try _surge_ for sharing static projects `pm install -g surge` type _surge_ in command prompt


__Automation in the dev environment using NPM Scripts__

Also called 'task runners'

1.) Instead of Grunt or Gulp

2.) Directly leverage OS cmd line or npm packages directly (without extraction layer of grunt or gulp) using npm Scripts and pre/post hooks (e.g., prestart).  Lower dependence on external authors and one less points of failure.

3.) By rights `start` is the standard entry point

4.) Parallel task runners can be executed by using package _npm-run-all_

___Transpiling using Babel___

Transpiles to es5.  For node specific build use __babel-preset-es2015-node__ as node already can run on most es6 (es2015).

1.) Instead of Grunt or Gulp

2.) Directly leverage OS cmd line or npm packages directly (without extraction layer of grunt or gulp) using npm Scripts and pre/post hooks (e.g., prestart).  Lower dependence on external authors and one less points of failure.

3.) Transpile build scripts too so all code is es6 or newer and not a mixture of code and linting rules can be consistent.

4.) when using es6 or greater in build scripts must use `babel-node` in npm scripts section of package.json

__Bundling___

1.) Typically used in web, but good for node too.  Nodes require is slow.  Combines all code into bundle.js or can be split into pages, etc.

2.) Only use __es6__ module formats which is a standards based manner to encapsulate code.  es2015 modules are statically analyzeable and allow for tree shaking (removing unused code when bundling).

3.)  _Webpack_ is out bundler here over Browserify, Rollup, and JSPM.  Webpack supports tree shaking and CSS, images, fonts, and html and allows for hot reloading.

4.)  configure Webpack using `webpack.config.dev.js` and `webpack.config.prod.js` using es6 as we'll transpile this.  In dev, the bundle will exisit in memory...tis confusing.  

-- loaders in webpack handle specific filetypes, specifically the babel loader to to transpile

--need to configure development server to serve the bundled file(s),  Do this in express within  srcServer.js

-- bundle css to a css file, don't embed into js

__source maps__

1.)  map bundled and minified code from bundle.js to source for debugging.  Source maps are only downloaded tools client if the web browser developer tools are opened.

2.) to debug js from original file (not bundled) put `debugger;` into code and run start

3.) source map styles are set in the webpack.config file `devtool:`

__eslint__

1.)  eslint allows you to use 5 diffent config files, just afile called `.eslintrc.json`

2.)  decide on warnings or errors, or both

3.)  config eslint to run as a watch - `npm install eslint-watch`

4.) automated linting in the build process ensures that all code is linted and message output to one location.  Some editors already lint, but this ensures that teams where multiple editors are in use all lint the same style.

5.) linting rules are configured using 0 (off), 1 (warning), 2 (error, build broken)

6.) add a `lint` command to package.json scripts section.

7.) a rule can be disabled within a file by adding ``/* eslint-disable no-console */`` at the top of the file or inline on a single line like this: `// eslint-disable-line no-console`

8.) to setup watching add to scripts in package.json: `"lint:watch": "npm run lint -- --watch",` below the exisitng lint script.  Add lint:watch to npm start as well and files will be watched

9.)
