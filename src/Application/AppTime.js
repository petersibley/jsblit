/**
* Represents time within the context of a running application
* @constructor
*/
function AppTime() {
    this.multiplier = 1;
    this.seconds = 0;
    this.startTime = (new Date()).getTime();
}

AppTime.prototype = {

    /**
    * Allows a caller to speed up or slow down the app time, useful for debugging
    * animation issues. For example specifying a value of 0.5 would slow down time by a half
    * @param {number} multiplier
    */
    setMultiplier: function (multiplier) {
        this.multiplier = multiplier;
    },
    
    /**
    * When called updates the AppTime instance to reflect
    * the current time
    */
    update: function () {
        var now = (new Date()).getTime();
        this.seconds = (now - this.startTime) / 1000 * this.multiplier;
    },
    
    /**
    * Returns the current app time. This is a number that is monotonically increasing
    * @return {number}
    */
    getSeconds: function () {
        return this.seconds;
    }
};