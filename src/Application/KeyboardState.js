/**
* Contains the current keyboard state of the application
* @constructor
*/
function KeyboardState(keyCode) {

    //TODO: Handle multiple keys, bit mask, how work in browser?
    
    /**
    * The current key code, if no key is pressed this is null
    * @type number
    */
    this.keyCode = keyCode;
}