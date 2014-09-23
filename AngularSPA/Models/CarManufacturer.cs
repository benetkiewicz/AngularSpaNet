namespace AngularSPA.Models
{
    using System.ComponentModel.DataAnnotations;

    public class CarManufacturer
    {
        public string Name { get; set; }

        [RegularExpression("^(BU|FD|FT|WV)$")]
        public string Id { get; set; }
    }
}