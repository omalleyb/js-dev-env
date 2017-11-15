# js-dev-env
JS development environment 

1.) grab editorconfig settings for your IDE on editorconfig.org

2.) setup "nsp check" to verify packages are cool - no known vulnerabilities : <code>npm install -g nsp</code> ...then... <code>nsp check</code> at command line

3.) setup development wb server ... Express JS.  Express should setup in srcServer.js within the buildScripts directory.  
>(Setup BrowserSync for multi device testing, not covered in this project.)

4.) put source code in **src** directory.  Put index.html here

5.) try localtunnel `npm install -g localtunnel`, run `lt --port 3000`  this open a hole to expose outside to mapped port for testing

6.) try now `pm install -g now`

6.) try surge for static projects `pm install -g surge` type _surge_ in command prompt

