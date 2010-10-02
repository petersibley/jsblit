using System;
using System.Threading;
using System.Windows.Controls;
using System.Windows.Media.Imaging;

namespace JsBlit
{
	public class Texture
	{
		int _id;
		static int _globalId = 0;
		
		public Texture (BitmapImage image)
		{
			this.Image = image;
			this.UIImage = new Image();
			this.UIImage.Source = this.Image;
			_id = Interlocked.Increment(ref Texture._globalId);
		}
		
		public int Id
		{
			get { return _id; }
		}
		
		public int Width
		{
			get{ return this.Image.PixelWidth; }
		}
		
		public int Height
		{
			get{ return this.Image.PixelHeight; }
		}
		
		public BitmapImage Image
		{
			get;set;
		}
		
		public Image UIImage
		{
			get;set;
		}
	}
}

