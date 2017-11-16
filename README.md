# js-dev-env
JS development environment 

git commands
`git clone https://github.com/omalleyb/js-dev-env`

`npm install` : `npm list` : `npm outdated` : `npm list`

change / update package.json to update packages use ^ or ~ to keep packages up to date and check periodically.

`git pull origin master` if something changes in git, and you need it locally


1.) grab editorconfig settings for your IDE on editorconfig.org

2.) setup "nsp check" to verify packages are cool - no known vulnerabilities : <code>npm install -g nsp</code> ...then... <code>nsp check</code> at command line

3.) setup development wb server ... Express JS.  Express should setup in srcServer.js within the buildScripts directory.  
>(Setup BrowserSync for multi device testing, not covered in this project.)

4.) put source code in **src** directory.  Put index.html here

5.) try _localtunnel_ `npm install -g localtunnel`, run `lt --port 3000`  this open a hole to expose outside to mapped port for testing.  Create npm start script, start app, open second prompt to run `lt --port 300 --subdomain brian`

6.) try _now_ for sharing progress, uploads project to cloud and returns URL for testing `pm install -g now`  Need npm start script like local tunnel.

7.) try _surge_ for sharing static projects `pm install -g surge` type _surge_ in command prompt



