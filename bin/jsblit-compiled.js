var MathHelper={};MathHelper.zeroTolerance=1.0E-6;MathHelper.PI=3.141592653589793;MathHelper.oneEightyOverPI=180/MathHelper.PI;MathHelper.piOverOneEighty=MathHelper.PI/180;MathHelper.degreesToRadians=function(a){return a*MathHelper.piOverOneEighty};MathHelper.radiansToDegrees=function(a){return a*MathHelper.oneEightyOverPI};MathHelper.random=function(){return Math.random()};MathHelper.sin=function(a){return Math.sin(a)};MathHelper.asin=function(a){return Math.asin(a)};MathHelper.cos=function(a){return Math.cos(a)};
MathHelper.acos=function(a){return Math.acos(a)};MathHelper.tan=function(a){return Math.tan(a)};MathHelper.atan=function(a){return Math.atan(a)};MathHelper.atan2=function(a,b){return Math.atan2(a,b)};MathHelper.sqrt=function(a){return Math.sqrt(a)};MathHelper.invSqrt=function(a){return 1/Math.sqrt(a)};MathHelper.abs=function(a){return Math.abs(a)};MathHelper.isFinite=function(a){return a>Number.NEGATIVE_INFINITY&&a<Number.POSITIVE_INFINITY};
MathHelper.clamp=function(a,b,c){return Math.min(Math.max(a,b),c)};function Vector2(a,b){this.x=a;this.y=b}
Vector2.prototype={dot:function(a){return this.x*a.x+this.y*a.y},perp:function(){return new Vector2(this.y,-this.x)},normalize:function(){var a;a=this.length();if(a<MathHelper.zeroTolerance)return new Vector2(0,0);a=1/a;return new Vector2(this.x*a,this.y*a)},length:function(){return MathHelper.sqrt(this.x*this.x+this.y*this.y)},lengthSquared:function(){return this.x*this.x+this.y*this.y},add:function(a){return new Vector2(this.x+a.x,this.y+a.y)},subtract:function(a){return new Vector2(this.x-a.x,
this.y-a.y)},multiplyScalar:function(a){return new Vector2(this.x*a,this.y*a)},equals:function(a){return this.x===a.x&&this.y===a.y},toString:function(){return"["+this.x+", "+this.y+"]"}};function Vector3(a,b,c){this.x=a;this.y=b;this.z=c}
Vector3.prototype={dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},normalize:function(){var a;a=this.length();if(a<MathHelper.zeroTolerance)return new Vector3(0,0,0);a=1/a;return new Vector3(this.x*a,this.y*a,this.z*a)},cross:function(a){return new Vector3(this.y*a.z-this.z*a.y,this.z*a.x-this.x*a.z,this.x*a.y-this.y*a.x)},length:function(){return MathHelper.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthSquared:function(){return this.x*this.x+this.y*this.y+this.z*this.z},add:function(a){return new Vector3(this.x+
a.x,this.y+a.y,this.z+a.z)},subtract:function(a){return new Vector3(this.x-a.x,this.y-a.y,this.z-a.z)},multiplyScalar:function(a){return new Vector3(this.x*a,this.y*a,this.z*a)},equals:function(a){return this.x===a.x&&this.y===a.y&&this.z===a.z},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"}};function Vector4(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d}
Vector4.prototype={dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},normalize:function(){var a;a=this.length();if(a<MathHelper.zeroTolerance)return new Vector4(0,0,0,0);a=1/a;return new Vector4(this.x*a,this.y*a,this.z*a,this.w*a)},length:function(){return MathHelper.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthSquared:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},add:function(a){return new Vector4(this.x+a.x,this.y+a.y,this.z+
a.z,this.w+a.w)},subtract:function(a){return new Vector4(this.x-a.x,this.y-a.y,this.z-a.z,this.w-a.w)},multiplyScalar:function(a){return new Vector4(this.x*a,this.y*a,this.z*a,this.w*a)},equals:function(a){return this.x===a.x&&this.y===a.y&&this.z===a.z&&this.w===a.w},toString:function(){return"["+this.x+", "+this.y+", "+this.z+", "+this.w+"]"}};function Matrix4x4(a,b,c,d,e,f,h,j,k,n,i,l,g,p,m,o){this.m11=a;this.m12=b;this.m13=c;this.m14=d;this.m21=e;this.m22=f;this.m23=h;this.m24=j;this.m31=k;this.m32=n;this.m33=i;this.m34=l;this.m41=g;this.m42=p;this.m43=m;this.m44=o}Matrix4x4.createIdentity=function(){return new Matrix4x4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)};Matrix4x4.createScale=function(a,b,c){return new Matrix4x4(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)};
Matrix4x4.createTranslation=function(a,b,c){return new Matrix4x4(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)};Matrix4x4.createRotationX=function(a){return new Matrix4x4(1,0,0,0,0,MathHelper.cos(a),-MathHelper.sin(a),0,0,MathHelper.sin(a),MathHelper.cos(a),0,0,0,0,1)};Matrix4x4.createRotationY=function(a){return new Matrix4x4(MathHelper.cos(a),0,-MathHelper.sin(a),0,0,1,0,0,MathHelper.sin(a),0,MathHelper.cos(a),0,0,0,0,1)};
Matrix4x4.createRotationZ=function(a){return new Matrix4x4(MathHelper.cos(a),-MathHelper.sin(a),0,0,MathHelper.sin(a),MathHelper.cos(a),0,0,0,0,1,0,0,0,0,1)};
Matrix4x4.prototype={add:function(a){return new Matrix4x4(this.m11+a.m11,this.m12+a.m12,this.m13+a.m13,this.m14+a.m14,this.m21+a.m21,this.m22+a.m22,this.m23+a.m23,this.m24+a.m24,this.m31+a.m31,this.m32+a.m32,this.m33+a.m33,this.m34+a.m34,this.m41+a.m41,this.m42+a.m42,this.m43+a.m43,this.m44+a.m44)},subtract:function(a){return new Matrix4x4(this.m11-a.m11,this.m12-a.m12,this.m13-a.m13,this.m14-a.m14,this.m21-a.m21,this.m22-a.m22,this.m23-a.m23,this.m24-a.m24,this.m31-a.m31,this.m32-a.m32,this.m33-
a.m33,this.m34-a.m34,this.m41-a.m41,this.m42-a.m42,this.m43-a.m43,this.m44-a.m44)},multiply:function(a){return new Matrix4x4(this.m11*a.m11+this.m12*a.m21+this.m13*a.m31+this.m14*a.m41,this.m11*a.m12+this.m12*a.m22+this.m13*a.m32+this.m14*a.m42,this.m11*a.m13+this.m12*a.m23+this.m13*a.m33+this.m14*a.m43,this.m11*a.m14+this.m12*a.m24+this.m13*a.m34+this.m14*a.m44,this.m21*a.m11+this.m22*a.m21+this.m23*a.m31+this.m24*a.m41,this.m21*a.m12+this.m22*a.m22+this.m23*a.m32+this.m24*a.m42,this.m21*a.m13+this.m22*
a.m23+this.m23*a.m33+this.m24*a.m43,this.m21*a.m14+this.m22*a.m24+this.m23*a.m34+this.m24*a.m44,this.m31*a.m11+this.m32*a.m21+this.m33*a.m31+this.m34*a.m41,this.m31*a.m12+this.m32*a.m22+this.m33*a.m32+this.m34*a.m42,this.m31*a.m13+this.m32*a.m23+this.m33*a.m33+this.m34*a.m43,this.m31*a.m14+this.m32*a.m24+this.m33*a.m34+this.m34*a.m44,this.m41*a.m11+this.m42*a.m21+this.m43*a.m31+this.m44*a.m41,this.m41*a.m12+this.m42*a.m22+this.m43*a.m32+this.m44*a.m42,this.m41*a.m13+this.m42*a.m23+this.m43*a.m33+
this.m44*a.m43,this.m41*a.m14+this.m42*a.m24+this.m43*a.m34+this.m44*a.m44)},multiplyScalar:function(a){return new Matrix4x4(this.m11*a,this.m12*a,this.m13*a,this.m14*a,this.m21*a,this.m22*a,this.m23*a,this.m24*a,this.m31*a,this.m32*a,this.m33*a,this.m34*a,this.m41*a,this.m42*a,this.m43*a,this.m44*a)},transpose:function(){return new Matrix4x4(this.m11,this.m21,this.m31,this.m41,this.m12,this.m22,this.m32,this.m42,this.m13,this.m23,this.m33,this.m43,this.m14,this.m24,this.m34,this.m44)},transformVector4:function(a){return new Vector4(this.m11*
a.x+this.m12*a.y+this.m13*a.z+this.m14*a.w,this.m21*a.x+this.m22*a.y+this.m23*a.z+this.m24*a.w,this.m31*a.x+this.m32*a.y+this.m33*a.z+this.m34*a.w,this.m41*a.x+this.m42*a.y+this.m43*a.z+this.m44*a.w)},transformVector3:function(a){return new Vector3(this.m11*a.x+this.m12*a.y+this.m13*a.z,this.m21*a.x+this.m22*a.y+this.m23*a.z,this.m31*a.x+this.m32*a.y+this.m33*a.z)},determinant:function(){return(this.m11*this.m22-this.m12*this.m21)*(this.m33*this.m44-this.m34*this.m43)-(this.m11*this.m23-this.m13*
this.m21)*(this.m32*this.m44-this.m34*this.m42)+(this.m11*this.m24-this.m14*this.m21)*(this.m32*this.m43-this.m33*this.m42)+(this.m12*this.m23-this.m13*this.m22)*(this.m31*this.m44-this.m34*this.m41)-(this.m12*this.m24-this.m14*this.m22)*(this.m31*this.m43-this.m33*this.m41)+(this.m13*this.m24-this.m14*this.m23)*(this.m31*this.m42-this.m32*this.m41)},inverse:function(){var a,b,c,d,e,f,h,j,k,n,i,l,g,p,m,o,q,r,s,t;a=this.m11*this.m22-this.m12*this.m21;b=this.m11*this.m23-this.m13*this.m21;c=this.m11*
this.m24-this.m14*this.m21;d=this.m12*this.m23-this.m13*this.m22;e=this.m12*this.m24-this.m14*this.m22;f=this.m13*this.m24-this.m14*this.m23;h=this.m31*this.m42-this.m32*this.m41;j=this.m31*this.m43-this.m33*this.m41;k=this.m31*this.m44-this.m34*this.m41;n=this.m32*this.m43-this.m33*this.m42;i=this.m32*this.m44-this.m34*this.m42;l=this.m33*this.m44-this.m34*this.m43;g=a*l-b*i+c*n+d*k-e*j+f*h;if(MathHelper.abs(g)<MathHelper.zeroTolerance)return Matrix4x4.createIdentity();p=this.m22*l-this.m23*i+this.m24*
n;m=-this.m12*l+this.m13*i-this.m14*n;o=this.m42*f-this.m43*e+this.m44*d;q=-this.m32*f+this.m33*e-this.m34*d;r=-this.m21*l+this.m23*k-this.m24*j;l=this.m11*l-this.m13*k+this.m14*j;s=-this.m41*f+this.m43*c-this.m44*b;f=this.m31*f-this.m33*c+this.m34*b;t=this.m21*i-this.m22*k+this.m24*h;k=-this.m11*i+this.m12*k-this.m14*h;i=this.m41*e-this.m42*c+this.m44*a;c=-this.m31*e+this.m32*c-this.m34*a;e=-this.m21*n+this.m22*j-this.m23*h;h=this.m11*n-this.m12*j+this.m13*h;j=-this.m41*d+this.m42*b-this.m43*a;a=
this.m31*d-this.m32*b+this.m33*a;g=1/g;return new Matrix4x4(p*g,m*g,o*g,q*g,r*g,l*g,s*g,f*g,t*g,k*g,i*g,c*g,e*g,h*g,j*g,a*g)},toString:function(){return this.m11+", "+this.m12+", "+this.m13+", "+this.m14+"\n"+this.m21+", "+this.m22+", "+this.m23+", "+this.m24+"\n"+this.m31+", "+this.m32+", "+this.m33+", "+this.m34+"\n"+this.m41+", "+this.m42+", "+this.m43+", "+this.m44+"\n"}};function Quaternion(a,b,c,d){this.w=a;this.x=b;this.y=c;this.z=d}Quaternion.createIdentity=function(){return new Quaternion(1,0,0,0)};
Quaternion.fromRotationMatrix=function(a){var b,c;c=new Quaternion(0,0,0,0);b=a.m11+a.m22+a.m33;if(MathHelper.abs(b)>MathHelper.zeroTolerance){c.w=MathHelper.sqrt(b+1)*0.5;b=1/(4*c.w);c.x=(a.m32-a.m23)*b;c.y=(a.m13-a.m31)*b;c.z=(a.m21-a.m12)*b}else{b=0;if(a.m22>a.m11){b=1;if(a.m33>a.m22)b=2}else if(a.m33>a.m11)b=2;switch(b){case 0:c.x=0.5*MathHelper.sqrt(a.m11-a.m22-a.m33+1);b=1/(4*c.x);c.w=(a.m32-a.m23)*b;c.y=(a.m12+a.m21)*b;c.z=(a.m13+a.m31)*b;break;case 1:c.y=0.5*MathHelper.sqrt(a.m22-a.m11-a.m33+
1);b=1/(4*c.y);c.w=(a.m13-a.m31)*b;c.x=(a.m12+a.m21)*b;c.z=(a.m23+a.m32)*b;break;case 2:c.z=0.5*MathHelper.sqrt(a.m33-a.m11-a.m22+1);b=1/(4*c.z);c.w=(a.m21-a.m12)*b;c.x=(a.m13+a.m31)*b;c.y=(a.m32+a.m23)*b;break}}return c};Quaternion.fromAxisAngle=function(a,b){var c,d;c=0.5*b;d=MathHelper.sin(c);return new Quaternion(MathHelper.cos(c),a.x*d,a.y*d,a.z*d)};
Quaternion.slerp=function(a,b,c){var d,e,f;if(a===0)return b;if(a===1)return c;d=b.dot(c);d=MathHelper.acos(d);if(MathHelper.abs(d)>=MathHelper.zeroTolerance){e=MathHelper.sin(d);f=1/e;e=MathHelper.sin((1-a)*d)*f;a=MathHelper.sin(a*d)*f;return b.multiplyScalar(e).add(c.multiplyScalar(a))}return b};
Quaternion.prototype={dot:function(a){return this.w*a.w+this.x*a.x+this.y*a.y+this.z*a.z},length:function(){return MathHelper.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z)},normalize:function(){var a;a=this.length();if(a<MathHelper.zeroTolerance)return new Quaternion(0,0,0,0);a=1/a;return new Quaternion(this.w*a,this.x*a,this.y*a,this.z*a)},inverse:function(){var a;a=this.w*this.w+this.x*this.x+this.y*this.y*this.z*this.z;if(MathHelper.abs(a)>MathHelper.zeroTolerance){a=1/a;return new Quaternion(this.w*
a,-this.x*a,-this.y*a,-this.z*a)}return new Quaternion(0,0,0,0)},conjugate:function(){return new Quaternion(this.w,-this.x,-this.y,-this.z)},transform:function(a){var b,c,d;c=2*(this.x*a.x+this.y*a.y+this.z*a.z);d=2*this.w;b=d*this.w-1;return new Vector3(b*a.x+c*this.x+d*(this.y*a.z-this.z*a.y),b*a.y+c*this.y+d*(this.z*a.x-this.x*a.z),b*a.z+c*this.z+d*(this.x*a.y-this.y*a.x))},add:function(a){return new Quaternion(this.w+a.w,this.x+a.x,this.y+a.y,this.z+a.z)},multiply:function(a){return new Quaternion(this.w*
a.w-this.x*a.x-this.y*a.y-this.z*a.z,this.y*a.z-this.z*a.y+this.w*a.x+a.w*this.x,this.z*a.x-this.x*a.z+this.w*a.y+a.w*this.y,this.x*a.y-this.y*a.x+this.w*a.z+a.w*this.z)},multiplyScalar:function(a){return new Quaternion(this.w*a,this.x*a,this.y*a,this.z*a)},toRotationMatrix:function(){var a,b,c,d,e,f,h,j,k;a=2*this.x;b=2*this.y;c=2*this.z;d=a*this.w;e=b*this.w;f=c*this.w;a=a*this.x;h=b*this.x;j=c*this.x;b=b*this.y;k=c*this.y;c=c*this.z;return new Matrix4x4(1-(b+c),h-f,j+e,0,h+f,1-(a+c),k-d,0,j-e,
k+d,1-(a+b),0,0,0,0,1)},toAxisAngle:function(){var a;a=this.x*this.x+this.y*this.y+this.z*this.z;if(a>MathHelper.zeroTolerance){a=MathHelper.invSqrt(a);return new Vector4(this.x*a,this.y*a,this.z*a,2*MathHelper.acos(this.w))}return new Vector4(1,0,0,0)},toString:function(){return"["+this.w+", "+this.x+", "+this.y+", "+this.z+"]"}};function Color(a,b,c,d){this.r=a;this.g=b;this.b=c;this.a=d;this.formatString="rgba("+this.r+", "+this.g+", "+this.b+", "+this.a/255+")"}Color.white=new Color(255,255,255,255);Color.black=new Color(0,0,0,255);var GraphicsHelper={};GraphicsHelper.createLookAtRH=function(a,b,c){var d,e;b=b.normalize();c=c.normalize();e=c.subtract(b.multiplyScalar(c.dot(b))).normalize();d=b.cross(e);c=Matrix4x4.createIdentity();c.m11=d.x;c.m12=d.y;c.m13=d.z;c.m21=e.x;c.m22=e.y;c.m23=e.z;c.m31=-b.x;c.m32=-b.y;c.m33=-b.z;a=c.transformVector3(a);c.m14=-a.x;c.m24=-a.y;c.m34=-a.z;return c};
GraphicsHelper.createPerspective=function(a,b,c,d){a=1/MathHelper.tan(a/2);return new Matrix4x4(a/b,0,0,0,0,a,0,0,0,0,(c+d)/(c-d),2*c*d/(c-d),0,0,-1,0)};function Frame(){this.position=new Vector3(0,0,0);this.rotation=Quaternion.createIdentity()};function PerspectiveCamera(){this.viewport=null;this.position=new Vector3(0,0,0);this.up=new Vector3(0,1,0);this.look=new Vector3(0,0,-1);this.fieldOfView=MathHelper.PI/2;this.viewTransform=Matrix4x4.createIdentity();this.projectionTransform=Matrix4x4.createIdentity();this.isDirty=true}
PerspectiveCamera.prototype={setDirty:function(){this.isDirty=true},setViewport:function(a){this.viewport=a;this.setDirty()},getViewport:function(){return this.viewport},setPosition:function(a){this.position=a;this.setDirty()},getPosition:function(){return this.position},setVerticalFov:function(a){this.fieldOfView=a;this.setDirty()},getVerticalFov:function(){return this.fieldOfView},setLook:function(a){this.look=a;this.setDirty()},getLook:function(){return this.look},setUp:function(a){this.up=a;this.setDirty()},
getUp:function(){return this.up},getViewTransform:function(){this.isDirty&&this.updateTransforms();return this.viewTransform},getProjectionTransform:function(){this.isDirty&&this.updateTransforms();return this.projectionTransform},updateTransforms:function(){this.viewTransform=GraphicsHelper.createLookAtRH(this.position,this.look,this.up);this.projectionTransform=GraphicsHelper.createPerspective(this.fieldOfView,this.viewport.getAspectRatio(),this.viewport.getNearDistance(),this.viewport.getFarDistance());
this.isDirty=false}};function Viewport(a,b,c,d){this.width=a;this.height=b;this.aspectRatio=this.width/this.height;this.nearDistance=c;this.farDistance=d}Viewport.prototype={getWidth:function(){return this.width},getHeight:function(){return this.height},getAspectRatio:function(){return this.aspectRatio},getNearDistance:function(){return this.nearDistance},getFarDistance:function(){return this.farDistance}};function SpriteSortOrder(){}SpriteSortOrder.inOrder=0;SpriteSortOrder.backToFront=1;SpriteSortOrder.frontToBack=2;function SpriteDrawOptions(){this.depth=0;this.destinationRect=this.sourceRect=null;this.position=new Vector2(0,0);this.rotation=this.scale=null;this.origin=new Vector2(0,0);this.alpha=1};function Rect2D(a,b,c,d){this.x=a;this.y=b;this.width=c;this.height=d}Rect2D.prototype={};function GraphicsDevice(a){this.jsBlitWindow=a;this.renderContext2D=this.renderTarget=null}
GraphicsDevice.prototype={getRenderTarget:function(){return this.renderTarget},setRenderTarget:function(a){if(this.renderTarget!==null)throw"Multiple setRenderTarget calls not supported";this.renderTarget=a;this.renderContext2D=this.renderTarget.platformData.getContext("2d");this.jsBlitWindow.platformData.appendChild(this.renderTarget.platformData)},clear:function(a){this.renderContext2D.fillStyle=a.formatString;this.renderContext2D.fillRect(0,0,this.renderTarget.width,this.renderTarget.height)},
drawSprites:function(a,b,c){var d,e,f,h,j,k,n,i,l,g,p,m,o;a&&this.renderContext2D.save();for(d=0;d<b.length;++d){f=c[d];e=b[f.spriteBatchTextureIndex];i=f.sourceRect;if(i===null){j=k=0;n=e.width;i=e.height}else{j=i.x;k=i.y;n=i.width;i=i.height}m=f.destinationRect;if(m===null){l=f.position.x;g=f.position.y;p=n;m=i}else{l=m.x;g=m.y;p=m.width;m=m.height}this.renderContext2D.save();h=f.rotation;if(h!==null){o=f.origin;this.renderContext2D.translate(o.x,o.y);this.renderContext2D.rotate(h);l-=o.x;g-=o.y}h=
f.scale;h!==null&&this.renderContext2D.scale(h.x,h.y);this.renderContext2D.globalAlpha=f.alpha;this.renderContext2D.drawImage(e.platformData,j,k,n,i,l,g,p,m);this.renderContext2D.restore()}a&&this.renderContext2D.restore()}};function Texture2D(a,b){this.height=b;this.width=a;this.platformData=null};function RenderTarget(a,b){this.width=a;this.height=b;this.platformData=document.createElement("Canvas");this.platformData.width=this.width;this.platformData.height=this.height};function SpriteBatch(a){this.sortOrder=SpriteSortOrder.inOrder;this.restoreState=true;this.graphicsDevice=a;this.textures=[];this.drawOptions=[]}SpriteBatch.frontToBackSort=function(a,b){return b.depth-a.depth};SpriteBatch.backToFrontSort=function(a,b){return a.depth-b.depth};
SpriteBatch.prototype={begin:function(a,b){this.sortOrder=a;this.restoreState=b;this.textures.length=0;this.drawOptions.length=0},draw:function(a,b){this.textures.push(a);this.drawOptions.push(b);b.spriteBatchTextureIndex=this.textures.length-1},end:function(){if(this.sortOrder===SpriteSortOrder.frontToBack)this.drawOptions.sort(SpriteBatch.frontToBackSort);else this.sortOrder===SpriteSortOrder.backToFront&&this.drawOptions.sort(SpriteBatch.backToFrontSort);this.graphicsDevice.drawSprites(this.restoreState,
this.textures,this.drawOptions)}};function TextureLoadRequest(a,b,c){this.uri=a;this.token=b;this.loadCompletedDelegate=c};function TextureLoadResponse(a,b,c){this.texture=a;this.token=b;this.error=c};function Content(){}Content.prototype={loadTextureAsync:function(a){var b=document.createElement("Image");b.onload=function(){var c=new Texture2D(b.width,b.height);c.platformData=b;c=new TextureLoadResponse(c,a.token,null);a.loadCompletedDelegate.loadTextureCompleted(c)};b.onerror=function(){a.loadCompletedDelegate.loadTextureCompleted(new TextureLoadResponse(null,a.token,{}))};b.src=a.uri}};function AppTime(){this.multiplier=1;this.seconds=0;this.startTime=(new Date).getTime()}AppTime.prototype={setMultiplier:function(a){this.multiplier=a},update:function(){this.seconds=((new Date).getTime()-this.startTime)/1E3*this.multiplier},getSeconds:function(){return this.seconds}};function MouseState(){};function KeyboardState(a){this.keyCode=a};var JsBlitWindowEvents=[];function JsBlitWindowOnKeyDown(a){var b;for(b in JsBlitWindowEvents)JsBlitWindowEvents[b].onKeyDown(a)}function JsBlitWindowOnKeyUp(a){var b;for(b in JsBlitWindowEvents)JsBlitWindowEvents[b].onKeyUp(a)}
function JsBlitWindow(a,b,c){this.id=a;this.width=b;this.height=c;this.platformData=document.createElement("div");this.platformData.style.width=this.width;this.platformData.style.height=this.height;this.platformData.tabIndex=0;JsBlitWindowEvents[this.id]=this;this.platformData.onkeydown=JsBlitWindowOnKeyDown;this.platformData.onkeyup=JsBlitWindowOnKeyUp;this.currentKeyCode=null}
JsBlitWindow.prototype={onKeyDown:function(a){this.currentKeyCode=a.which},onKeyUp:function(){this.currentKeyCode=null},getKeyCode:function(){return this.currentKeyCode}};var JsBlitAppGlobalInstances=[];function JsBlitAppCallMainLoop(a){JsBlitAppGlobalInstances[a].mainLoop()}function JsBlitApp(a){this.appTime=new AppTime;this.delegate=null;this.jsBlitWindow=a;this.graphicsDevice=new GraphicsDevice(this.jsBlitWindow);this.content=new Content;this.frameRate=10;this.keyboardState=new KeyboardState(null);this.mouseState=new MouseState;this.globalInstance=JsBlitAppGlobalInstances;this.globalInstance[this.jsBlitWindow.id]=this}
JsBlitApp.prototype={getWindow:function(){return this.jsBlitWindow},setFrameRate:function(a){this.frameRate=a},startRendering:function(){this.mainLoopId=setInterval('JsBlitAppCallMainLoop("'+this.jsBlitWindow.id+'");',1E3/this.frameRate)},stopRendering:function(){clearInterval(this.mainLoopId)},getGraphicsDevice:function(){return this.graphicsDevice},setDelegate:function(a){this.delegate=a},mainLoop:function(){this.appTime.update();this.keyboardState.keyCode=this.jsBlitWindow.getKeyCode();this.delegate.update(this.graphicsDevice,
this.appTime,this.mouseState,this.keyboardState);this.delegate.render(this.graphicsDevice,this.appTime)}};
