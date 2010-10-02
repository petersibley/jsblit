using System;
using System.Windows.Browser;
using System.Collections.Generic;
using System.Windows.Media;
using System.Windows.Controls;
using System.Windows.Media.Imaging;
using System.Windows;

namespace JsBlit
{
	[ScriptableType]	
	public class GraphicsDevice
	{
		Page _page;
		Content _content;
		Dictionary<int, RenderTarget> _renderTargets = new Dictionary<int, RenderTarget>();
		
		public GraphicsDevice (Page page, Content content)
		{
			_content = content;
			_page = page;
		}
		
		[ScriptableMember(ScriptAlias = "createRenderTarget")]
		public int CreateRenderTarget(int width, int height)
		{
			RenderTarget r = new RenderTarget(width, height);
			_renderTargets[r.Id] = r;
			return r.Id;
		}
		
		[ScriptableMember(ScriptAlias = "releaseRenderTarget")]
		public void ReleaseRenderTarget(int id)
		{
			//TODO:
		}
		
		[ScriptableMember(ScriptAlias = "setRenderTarget")]
		public void SetRenderTarget(int id)
		{
			_page.LayoutRoot.Children.Add(new Image(){ Source = _renderTargets[id].Surface});
		}
		
		[ScriptableMember(ScriptAlias = "clear")]
		public void Clear(int id, int r, int g, int b, int a)
		{
			//TODO: Implement
			
			//Canvas surface = _renderTargets[id].Surface;
			//surface.Children.Clear();
			
			//Color c = Color.FromArgb((byte)a, (byte)r, (byte)g, (byte)b);
			//((SolidColorBrush)surface.Background).Color = c;
		}
		
		[ScriptableMember(ScriptAlias = "drawSprites")]
		public void DrawSprites(int renderTargetId, string commands)
		{
			
			WriteableBitmap surface = _renderTargets[renderTargetId].Surface;
			string[] commandItems = commands.Split(',');
			
			for(int index = 0; index<commandItems.Length;)
			{
				double sx, sy, dx, dy, rotation, alpha, originX, originY;
				
				Image img = _content.getTexture((int)double.Parse(commandItems[index++])).UIImage;
				dx = double.Parse(commandItems[index++]);
				dy = double.Parse(commandItems[index++]);
				sx = double.Parse(commandItems[index++]);
				sy = double.Parse(commandItems[index++]);
				
				rotation = double.Parse(commandItems[index++]);
				alpha = double.Parse(commandItems[index++]);
				originX = double.Parse(commandItems[index++]);
				originY = double.Parse(commandItems[index++]);
				
				//TODO: Honour the sourceRect and destRect in the draw options
				img.Opacity = alpha;
				
				TranslateTransform tPosition = new TranslateTransform(){ X = dx, Y = dy };
				ScaleTransform s = new ScaleTransform() { ScaleX = sx, ScaleY = sy };;
				RotateTransform r = new RotateTransform() { Angle = rotation * 180.0 / Math.PI, CenterX = originX, CenterY = originY };
				TransformGroup g = new TransformGroup();
				g.Children.Add(s);
				g.Children.Add(r);
				g.Children.Add(tPosition);
				
				surface.Render(img, g);
			}
			
			surface.Invalidate();
		}
	}
}