using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularSPA.Controllers
{
    using DataSource;
    using Models;

    public class CarManufacturersController : ApiController
    {
        public List<CarManufacturer> GetCarMakes(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            var repo = new CarManufacturersRepository();
            return repo.GetManufacturerByWorldRegion(id);
        }

        public List<WorldRegion> GetWorldRegions()
        {
            var repo = new CarManufacturersRepository();
            return repo.GetWorldRegions();
        } 
    }
}
