using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularSPA.Controllers
{
    using System.ComponentModel.DataAnnotations;

    public class RegistrationController : ApiController
    {
        public Registration Post(Registration registration)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState));
            }

            return registration;
        }
    }

    public class Registration
    {
        [Required]
        public string firstName { get; set; }

        [Required]
        public string lastName { get; set; }
    }
}
