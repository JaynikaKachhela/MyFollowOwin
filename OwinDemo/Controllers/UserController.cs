using Microsoft.AspNet.Identity;
using OwinDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OwinDemo.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        OwinContext db = new OwinContext();
        [Authorize(Roles = "EndUser")]
        public ActionResult Index()
        {
            
            var id=User.Identity.GetUserId();
            ApplicationUser user = db.Users.Find(id);
            return View(user);
        }

        [Authorize(Roles = "Administrator")]
        public ActionResult Admin(ApplicationUser user)
        {
            return View(user);
        }

        [Authorize(Roles = "ProductOwner")]
        public ActionResult ProductOwner()
        {
            return View();
        }
    }
}