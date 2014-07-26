namespace AngularSPA
{
    using System.Web.Optimization;

    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new Bundle("~/Content/css")
                .Include("~/Content/bootstrap.min.css")
                .Include("~/Content/style.css"));
            bundles.Add(new Bundle("~/scripts/application").IncludeDirectory("~/scripts/app", "*.js", true));
            bundles.Add(new Bundle("~/scripts/libraries")
                .Include("~/scripts/jquery-{version}.js")
                .Include("~/scripts/angular.js")
                .Include("~/scripts/angular-route.js")
                .Include("~/scripts/bootstrap.min.js"));
        }
    }
}