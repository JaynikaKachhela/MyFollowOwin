using System;
using System.ComponentModel.DataAnnotations;

namespace OwinDemo.Models
{
    public class CommonProperty
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [DataType(DataType.Date)]
        public DateTime CreatedDate { get; set; }
        [DataType(DataType.Date)]
        public DateTime LastModifiedDate { get; set; }
    }
}