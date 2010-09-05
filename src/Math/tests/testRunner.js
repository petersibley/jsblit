//debugger;
load("../../../tools/env-js/dist/env.rhino.js");
load("../../../tools/env-js/plugins/env.qunit.js");

//This snipet is from 
// http://www.envjs.com/doc/guides#running-rhino
// basically we load index.html but intercept the results to print to the console.


Envjs({
    scriptTypes: {
        '': true, //anonymous and inline
        'text/javascript': true
    },
    afterScriptLoad:{
        "qunit": function(script){
            var count = 0,
                module;
            // track test modules so we can include them in logs
            QUnit.moduleStart = function(name, settings) {
                module = name;
            };
            // hookinto QUnit log so we can log test results 
            QUnit.log = function(result, message){
                console.log(
                     '{%s}(%s)[%s] %s ',
                     module, 
                     count++, 
                     result ? 'PASS' : 'FAIL', 
                     message
                );
            };
            // hook into qunit.done and write resulting html to a
            // a new file.  Be careful to neutralize script tags so 
            // opening the script in the browser allows the results 
            // to act as a static report without re-running tests
            QUnit.done = function(fail, pass){
                console.log('PASSED: %s FAILED: %s', pass, fail);
                //Writing Results to File
                jQuery('script').each(function(){
                    this.type = 'text/envjs';
                });
                Envjs.writeToFile(
                    document.documentElement.outerHTML, 
                    Envjs.uri('results.html')
                );
           };
        }
    }
});

//yup its that easy
window.location = 'index.html';
