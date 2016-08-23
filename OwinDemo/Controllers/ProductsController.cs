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

namespace OwinDemo.Controllers
{
    [RoutePrefix("api/[controller]")]
    public class ProductsController : ApiController
    {
        private OwinContext db = new OwinContext();
        // GET: api/Products
        [Authorize]
        [HttpGet]
        public IQueryable<Product> GetProducts()
        {
            var userManager = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
            var Id = User.Identity.GetUserId();
            bool ProductOwner = userManager.IsInRole(Id, "ProductOwner");
            bool EndUser = userManager.IsInRole(Id, "EndUser");

            List<Product> products = db.Products.ToList();
            foreach (var product in products.ToList())
            {
                if (ProductOwner)
                {
                    if (product.ProductOwnerId != Id)
                        products.Remove(product);
                }

                if (EndUser)
                {
                    foreach (var follower in db.Followers.ToList())
                    {
                        if ((Id == follower.UserId) && (product.Id==follower.ProductId))
                            products.Remove(product);
                    }
                }
            }
            return products.AsQueryable();
        }


        // POST: api/Products
        [ResponseType(typeof(Product))]
        [HttpPost]
        public IHttpActionResult PostProduct(Product product)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            var Id = User.Identity.GetUserId();
            DateTime Now = DateTime.Now;
            product.CreatedDate = Now;
            product.LastModifiedDate = Now;
            product.ProductOwnerId = Id;
            db.Products.Add(product);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete]
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }
             

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        [HttpPut]
        public IHttpActionResult PutProduct(int id, Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }
            DateTime Now = DateTime.Now;
            product.LastModifiedDate = Now;
            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }


        // GET: api/Products/5
        //[ResponseType(typeof(Product))]
        [HttpGet]
        public IQueryable<Product> GetProduct(int id)
        {
            List<Product> products = new List<Product>();

            var Id = User.Identity.GetUserId();
            if (id == 5)
            {

                foreach (var follower in db.Followers.ToList())
                {
                    if (follower.UserId == Id)
                    {
                        Product product = db.Products.Find(follower.ProductId);
                        products.Add(product);
                    }

                }
            }
            if (id == 7)
            {
                foreach (var product in db.Products.ToList())
                {
                    if ((Id != product.ProductOwnerId))
                    {
                        products.Add(product);
                        break;
                    }
                }
                foreach(var product in products.ToList())
                {
                    foreach (var follower in db.Followers.ToList())
                    {
                        if (follower.ProductId == product.Id && follower.UserId == Id)
                        {
                                products.Remove(product);
                                break;
                        }

                    }
                }
            }
            return products.AsQueryable();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.Id == id) > 0;
        }
    }
}