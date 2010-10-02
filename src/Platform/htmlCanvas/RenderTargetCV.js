/**
* A render target represents a surface that can be drawn onto
* @param {number} width
* @param {number} height
* @constructor
* @extends RenderTarget
* @ignore
*/
function RenderTargetCV(width, height) {

	RenderTargetCV.baseConstructor.call(this, width, height);
	
    /*jslint browser:true */
    this.platformData = document.createElement('Canvas');
    this.platformData.width = this.width;
    this.platformData.height = this.height;
}
Utils.extend(RenderTargetCV, RenderTarget);