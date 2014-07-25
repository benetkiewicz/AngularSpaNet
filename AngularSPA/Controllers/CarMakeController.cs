using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularSPA.Controllers
{
    public class CarMakeController : ApiController
    {
        public List<CarMake> GetCarMakes(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            switch (id)
            {
                case "A":
                    return new List<CarMake>
                    {
                        new CarMake {Id = "BU", Name = "Buick"},
                        new CarMake {Id = "FD", Name = "Ford"}
                    };
                case "E":
                    return new List<CarMake>
                    {
                        new CarMake {Id = "FT", Name = "Fiat"},
                        new CarMake {Id = "VW", Name = "VolksWagen"}
                    };
                default:
                    throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        } 
    }

    public class CarMake
    {
        public string Name { get; set; }
        public string Id { get; set; }
    }
}
