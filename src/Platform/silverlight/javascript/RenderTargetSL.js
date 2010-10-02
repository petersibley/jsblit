/**
* A render target represents a surface that can be drawn onto
* @param {number} width
* @param {number} height
* @constructor
* @extends RenderTarget
* @ignore
*/
function RenderTargetSL(deviceProxy, width, height) {

	RenderTargetSL.baseConstructor.call(this, width, height);
	
	//Creates a render target in the SL runtime and returns a unique id to it
	this.runtimeId = deviceProxy.createRenderTarget(width, height);
}

Utils.extend(RenderTargetSL, RenderTarget);

//TODO: Need to have a release

