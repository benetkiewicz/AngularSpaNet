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
                List<string> validationErrorMessages = new List<string>();
                foreach (var modelStateKey in ModelState.Keys)
                {
                    validationErrorMessages.AddRange(ModelState[modelStateKey].Errors.Select(error => error.ErrorMessage));
                }

                HttpResponseMessage msg = Request.CreateResponse(HttpStatusCode.BadRequest, validationErrorMessages);
                throw new HttpResponseException(msg);
            }

            return registration;
        }
    }
}
