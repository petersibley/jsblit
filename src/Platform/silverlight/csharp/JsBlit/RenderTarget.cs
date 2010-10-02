using System.Threading;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace JsBlit
{
	public class RenderTarget
	{
		WriteableBitmap _bitmap;
		int _id;
		static int _globalId = 0;
		
		public RenderTarget (int width, int height)
		{
			_bitmap = new WriteableBitmap(width, height);
			_id = Interlocked.Increment(ref _globalId);
		}
		
		public WriteableBitmap Surface
		{
			get{ return _bitmap; }
		}
		
		public int Id
		{
			get { return _id; }
		}
	}
}

