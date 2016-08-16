using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace OwinDemo.Models
{
    public class ProductUpdate : CommonProperty
    {
        [DataType(DataType.MultilineText)]
        public string Introduction { get; set; }
        [DataType(DataType.MultilineText)]
        public string Detail { get; set; }
        public string Media { get; set; }
        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }
    }
}