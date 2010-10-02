using System;
using System.Collections.Generic;
using System.Net;
using System.Windows.Browser;
using System.Windows.Media.Imaging;
using System.Windows.Media;

namespace JsBlit
{
	[ScriptableType]
	public class Content
	{
		Dictionary<int, Texture> _textures = new Dictionary<int, Texture>();
		public Content (Page page)
		{
		}
		
		[ScriptableMember(ScriptAlias = "releaseTexture")]
		public void ReleaseTexture(int id)
		{
			_textures[id].Image.SetSource(null);
			_textures[id] = null;
		}
		
		[ScriptableMember(ScriptAlias = "loadTextureAsync")]
		public void LoadTextureAsync(string uri, object token, ScriptObject completedDelegate)
		{
			BitmapImage bi = new BitmapImage();
			bi.ImageFailed += delegate(object sender, System.Windows.ExceptionRoutedEventArgs e)
			{
				completedDelegate.Invoke("loadTextureCompleted", -1, -1, -1, token, new Object());
			};
			bi.ImageOpened += delegate(object sender, System.Windows.RoutedEventArgs e)
			{
				Texture t = new Texture(bi);
				_textures[t.Id] = t;
				
				completedDelegate.Invoke("loadTextureCompleted", t.Id, t.Width, t.Height, token, null);
			};
			
			//Make sure we download the texture now, without it being part of the DOM
			bi.CreateOptions = BitmapCreateOptions.None;
			bi.UriSource = new Uri(uri, UriKind.Absolute);
		}
		
		internal Texture getTexture(int id)
		{
			return _textures[id];
		}
	}
}

