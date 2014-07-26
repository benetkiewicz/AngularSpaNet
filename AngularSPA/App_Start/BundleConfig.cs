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
            bundles.Add(new Bundle("~/scripts/application")
                .Include("~/scripts/app/app.js")
                .Include("~/scripts/app/controllers/registrationController.js")
                .Include("~/scripts/app/services/carMakeService.js"));
            bundles.Add(new Bundle("~/scripts/libraries")
                .Include("~/scripts/jquery-{version}.js")
                .Include("~/scripts/angular.js")
                .Include("~/scripts/angular-route.js")
                .Include("~/scripts/bootstrap.min.js"));
        }
    }
}