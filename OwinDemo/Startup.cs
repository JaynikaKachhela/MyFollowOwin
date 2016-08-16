using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OwinDemo.Startup))]
namespace OwinDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
