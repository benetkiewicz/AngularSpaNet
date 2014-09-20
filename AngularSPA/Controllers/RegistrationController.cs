using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularSPA.Controllers
{
    using Models;

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
}
