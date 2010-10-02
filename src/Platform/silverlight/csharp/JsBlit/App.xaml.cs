using System.Windows;

namespace JsBlit
{
	public partial class App : Application
	{
		public App ()
		{
			this.Startup += new StartupEventHandler (OnStartup);
			this.InitializeComponent ();
		}

		void OnStartup (object sender, StartupEventArgs args)
		{
			this.RootVisual = new Page (args.InitParams["id"]);
		}
	}
}

