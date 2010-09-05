#!/bin/bash
RHINOJAR="../../../tools/env-js/rhino/js.jar"
echo "Running test with rhino"
java -cp $RHINOJAR org.mozilla.javascript.tools.shell.Main -opt -1 testRunner.js 
