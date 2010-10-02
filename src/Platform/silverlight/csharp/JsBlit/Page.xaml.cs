using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Browser;

namespace JsBlit
{
	public partial class Page : UserControl
	{
		GraphicsDevice _device;
		Content _content;
		
		public Page (string id)
		{
			this.InitializeComponent ();
			this.Loaded += delegate {
				
				_content = new Content(this);
				_device = new GraphicsDevice(this, _content);
				
            	HtmlPage.RegisterScriptableObject("graphicsDevice", _device);
				HtmlPage.RegisterScriptableObject("content", _content);
			};
			
			this.KeyDown += delegate(object sender, System.Windows.Input.KeyEventArgs e) {
				HtmlPage.Window.Invoke("JsBlitWindowSLOnKeyDown", id, e.PlatformKeyCode);
			};
			
			this.KeyUp += delegate(object sender, System.Windows.Input.KeyEventArgs e) {
				HtmlPage.Window.Invoke("JsBlitWindowSLOnKeyUp", id, e.PlatformKeyCode);
			};
		}
	}
}

