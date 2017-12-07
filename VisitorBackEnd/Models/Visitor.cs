using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace VisitorBackEnd.Models
{
    public class Visitor
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int  Id { get; set; }
        [Column("IP_ADDRESS")]
        public string IpAddress { get; set; }
        [Column("COUNTRY_NAME")]
        public string CountryName { get; set; }
        [Column("REGION_NAME")]
        public string RegionName { get; set; }
        public string City { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        [Column("INSERT_DATE")]
        public DateTime InsertDate { get; set; }
        [Column("UPDATE_DATE")]
        public DateTime? UpdateDate { get; set; }
    }
}
