using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OwinDemo.Models;
using Microsoft.AspNet.Identity;
using System.Web.Security;
using System.Web;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNet.Identity.EntityFramework;

namespace OwinDemo.Controllers
{
    [RoutePrefix("api/[controller]")]
    public class ApplicationUsersController : ApiController
    {
        
        private OwinContext db = new OwinContext();

        // GET: api/ApplicationUsers
        [Authorize]
        //[Route]
        [HttpGet]
        public IQueryable<ApplicationUser> GetApplicationUsers()
        {
            var userManager= HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
            List<ApplicationUser> Users = db.Users.ToList();
        
            foreach (ApplicationUser user in Users.ToList())
            {
                if(!((userManager.IsInRole(user.Id,"EndUser"))&&( user.ProductOwner.CompanyName!=null)))
                {
                    Users.Remove(user);
                }
            }
            //string[] usersInRole =RoleProvider.GetUsersInRole("EndUser");
            return Users.AsQueryable();
           
        }
        // POST: api/ApplicationUsers
        [ResponseType(typeof(ProductOwner))]
        //[Route]
        [HttpPost]
        public IHttpActionResult PostApplicationUser(ProductOwner applicationUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Id = User.Identity.GetUserId();
            ApplicationUser appUser = db.Users.Find(Id);
            appUser.ProductOwner = applicationUser;
            db.Entry(appUser).State = EntityState.Modified;
            //db.ApplicationUsers.Add(applicationUser);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ApplicationUserExists(appUser.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = appUser.Id }, applicationUser);
        }

        // GET: api/ApplicationUsers/5
        //[ResponseType(typeof(ApplicationUser))]
        [ResponseType(typeof(void))]
        [HttpPut]
        //[Route]
        public IHttpActionResult GetApplicationUser(string id)
        {
            var state = db.Users.FirstOrDefault(x => x.Id == id);
            if (state != null)
            {
                var UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));
                ApplicationUser user = db.Users.Find(id);
                UserManager.RemoveFromRole(user.Id, "EndUser");
                UserManager.AddToRole(user.Id, "ProductOwner");
                //System.Web.Security.Roles.AddUserToRole(user.Id, "ProductOwner");
            }

            //db.Entry(applicationUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);

        }
        // DELETE: api/ApplicationUsers/5
        [ResponseType(typeof(ApplicationUser))]
        [HttpDelete]
        public IHttpActionResult DeleteApplicationUser(string id)
        {
            ApplicationUser applicationUser = db.Users.Find(id);
            applicationUser.ProductOwner = new ProductOwner();
            db.Entry(applicationUser).State = EntityState.Modified;
            //db.ApplicationUsers.Add(applicationUser);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ApplicationUserExists(applicationUser.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = applicationUser.Id }, applicationUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplicationUserExists(string id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }

    ////PUT: api/ApplicationUsers/5
    //[ResponseType(typeof(void))]
    //[HttpGet]
    //public IQueryable PutApplicationUser(int id)
    //{
    //    var Id = User.Identity.GetUserId();
    //    ApplicationUser user = db.Users.Find(Id);
    //    List<ApplicationUser> Users = new List<ApplicationUser>();
    //    if (user.ProductOwner.CompanyName != null)
    //        Users.Add(user);
    //    return Users.AsQueryable();
    //}


}