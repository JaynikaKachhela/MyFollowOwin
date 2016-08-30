using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OwinDemo.Models
{
    public class OwinContext : IdentityDbContext<ApplicationUser>
    {
        public OwinContext()
            : base("OwinContext", throwIfV1Schema: false)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Followers> Followers { get; set; }
        public DbSet<ProductUpdate> ProductUpdates { get; set; }
        public static OwinContext Create()
        {
            return new OwinContext();
        }
        
    }
}