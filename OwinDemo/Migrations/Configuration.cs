namespace OwinDemo.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<OwinDemo.Models.OwinContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        public enum Roles
        {
            Administrator,
            EndUser,
            ProductOwner
        }

        protected override void Seed(OwinDemo.Models.OwinContext context)
        {
            var Roles = Enum.GetNames(typeof(Roles));
            foreach (var role in Roles)
            {
                if (!context.Roles.Any(r => r.Name == role))
                {
                    var store = new RoleStore<IdentityRole>(context);
                    var manager = new RoleManager<IdentityRole>(store);
                    var roles = new IdentityRole { Name = role };

                    manager.Create(roles);
                }
            }
            var user = new ApplicationUser
            {
                UserName = "Jaynika Kachhela",
                Email = "admin@myfollow.com",
                EmailConfirmed = true,
                DateOfBirth = Convert.ToDateTime("31-01-1995"),
                        Address = new Address
                        {
                            Street1 = "1532,AmbikaNagar",
                            Street2 = "Gotri road",
                            City = "baroda",
                            State = "gujarat",
                            Country = "India",
                            Pincode = 390019,
                            ContactNumber = "1234567890"
                        }
                    };
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            if (!context.Users.Any(u => u.Email == "admin@myfollow.com"))
            {
                context.Users.Add(user);
                
                if (userManager.FindByEmail("admin@myfollow.com") == null)
                {
                    var result = userManager.Create(user, "Password@123");
                }
            }
            ApplicationUser user1 = userManager.FindByEmail("admin@myfollow.com");
            if(user1!=null)
            {
                userManager.AddToRole(user1.Id, "Administrator");
            }
        }
    }
}
