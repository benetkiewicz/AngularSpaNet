namespace AngularSPA.Models
{
    using System.ComponentModel.DataAnnotations;

    public class CarMake
    {
        public string Name { get; set; }

        [RegularExpression("^(BU|FD|FT|VW)$")]
        public string Id { get; set; }
    }
}