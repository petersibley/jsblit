/*global GraphicsDeviceSL, ContentSL */

var JsBlitWindowSLGlobalInstances = [];

/** @ignore */
function JsBlitWindowPluginLoaded(sender) {
	var host = sender.getHost();
	JsBlitWindowSLGlobalInstances[host.InitParams.split('=')[1]].slLoaded(host.Content.graphicsDevice,
																		  host.Content.content);
}

/** @ignore */
function JsBlitWindowSLOnKeyDown(windowId, keyCode) {
	JsBlitWindowSLGlobalInstances[windowId].onKeyDown(keyCode);
}

/** @ignore */
function JsBlitWindowSLOnKeyUp(windowId, keyCode) {
	JsBlitWindowSLGlobalInstances[windowId].onKeyUp(keyCode);
}

/**
* The JsBlitWindowSL class is responsible for capturing user
* input for the JsBlitApplication
* @param {string} id A unique id for the window
* @param {number} width The width of the window
* @param {number} height The height of the window
* @param {Object} delegate A delegate that handles all of the JsBlitWindowCV callbacks
* @param {string} runtimePath A path to the location of the JsBlit.xap file (including JsBlit.xap in the name)
* @constructor
* @extends JsBlitWindow
* @ignore
*/
function JsBlitWindowSL(id, width, height, delegate, runtimePath) {
        
    //This is the underlying Silverlight representation of the graphics device
    this.proxyGraphicsDevice = null;
    
	JsBlitWindowSL.baseConstructor.call(this, id, width, height, delegate, new GraphicsDeviceSL(this), new ContentSL());
	JsBlitWindowSLGlobalInstances[this.id] = this;
	this.platformData = document.createElement('div');

	//jslint doesn't seem to like multiline strings using \ so concatentate strings
	this.platformData.innerHTML = '<object data="data:application/x-silverlight," type="application/x-silverlight-2" width="' + width + '" height="' + height + '">' +
										'<param name="source" value="' + runtimePath + '"/>' +
										'<param name="onLoad" value="JsBlitWindowPluginLoaded" />' +
										'<param name="initParams" value="id=' + this.id + '" />' +
										'<param name="background" value="white" />' +
										'<param name="minRuntimeVersion" value="2.0.31005.0" />' +
										'<param name="autoUpgrade" value="true" />' +
										'<param name="maxFrameRate" value="30" />' +
										'<param name="enableHtmlAccess" value="true" />' +
										'<a href="http://go.microsoft.com/fwlink/?LinkID=124807" style="text-decoration: none;">' +
										'<img src="http://go.microsoft.com/fwlink/?LinkId=108181" alt="Get Microsoft Silverlight" style="border-style: none"/>' +
										'</a>' +
										'</object>' +
									'<iframe style="visibility:hidden;height:0;width:0;border:0px"></iframe>';
}
Utils.extend(JsBlitWindowSL, JsBlitWindow);  

JsBlitWindowSL.prototype.slLoaded = function (graphicsDevice, content) {

	//TODO: Jut create graphics device here? Cleaner?
	this.graphicsDevice.setProxy(graphicsDevice);
	this.content.setProxy(content);
	this.onLoaded();
};

JsBlitWindowSL.prototype.onKeyDown = function (keyCode) {
	this.setKeyCode(keyCode);
};

JsBlitWindowSL.prototype.onKeyUp = function (keyCode) {
	this.setKeyCode(null);
};