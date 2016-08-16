using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace OwinDemo.Models
{
    public class ProductOwner 
    {
        public string CompanyName { get; set; }
        [DataType(DataType.MultilineText)]
        public string Description { get; set; }
        public int FoundedYear { get; set; }
        [DataType(DataType.Url)]
        public string WebsiteUrl { get; set; }
     }
}