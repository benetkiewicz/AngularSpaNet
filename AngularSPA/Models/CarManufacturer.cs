namespace AngularSPA.Models
{
    using System.ComponentModel.DataAnnotations;

    public class CarManufacturer
    {
        public string Name { get; set; }

        [RegularExpression("^(BU|FD|FT|VW)$")]
        public string Id { get; set; }
    }
}