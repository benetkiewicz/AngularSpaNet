namespace AngularSPA.Models
{
    using System.ComponentModel.DataAnnotations;

    public class WorldRegion
    {
        [RegularExpression("^(E|A)$")]
        public string Id { get; set; }

        public string Name { get; set; }
    }
}