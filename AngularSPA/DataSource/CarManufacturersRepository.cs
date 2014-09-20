namespace AngularSPA.DataSource
{
    using System;
    using System.Collections.Generic;
    using Models;

    public class CarManufacturersRepository
    {
        public List<WorldRegion> GetWorldRegions()
        {
            return new List<WorldRegion>
            {
                new WorldRegion {Id = "E", Name = "Europe"},
                new WorldRegion {Id = "A", Name = "America"}
            };
        }

        public List<CarManufacturer> GetManufacturerByWorldRegion(string worldRegion)
        {
            switch (worldRegion)
            {
                case "A":
                    return new List<CarManufacturer>
                    {
                        new CarManufacturer {Id = "BU", Name = "Buick"},
                        new CarManufacturer {Id = "FD", Name = "Ford"}
                    };
                case "E":
                    return new List<CarManufacturer>
                    {
                        new CarManufacturer {Id = "FT", Name = "Fiat"},
                        new CarManufacturer {Id = "VW", Name = "VolksWagen"}
                    };
                default:
                    throw new NotImplementedException(string.Format("No such world region: '{0}'", worldRegion));
            }
        }
    }
}