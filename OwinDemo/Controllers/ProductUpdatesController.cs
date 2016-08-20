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

namespace OwinDemo.Controllers
{
    public class ProductUpdatesController : ApiController
    {
        private OwinContext db = new OwinContext();

      
        // POST: api/ProductUpdates
        [ResponseType(typeof(ProductUpdate))]
        public IHttpActionResult PostProductUpdate(ProductUpdate productUpdate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            DateTime Now = DateTime.Now;
            productUpdate.CreatedDate = Now;
            productUpdate.LastModifiedDate = Now;
            db.ProductUpdates.Add(productUpdate);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = productUpdate.Id }, productUpdate);
        }

        //// GET: api/ProductUpdates
        //public IQueryable<ProductUpdate> GetProductUpdates()
        //{
        //    return db.ProductUpdates;
        //}

        //// GET: api/ProductUpdates/5
        //[ResponseType(typeof(ProductUpdate))]
        //public IHttpActionResult GetProductUpdate(int id)
        //{
        //    ProductUpdate productUpdate = db.ProductUpdates.Find(id);
        //    if (productUpdate == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(productUpdate);
        //}

        //// PUT: api/ProductUpdates/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutProductUpdate(int id, ProductUpdate productUpdate)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != productUpdate.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(productUpdate).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ProductUpdateExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// DELETE: api/ProductUpdates/5
        //[ResponseType(typeof(ProductUpdate))]
        //public IHttpActionResult DeleteProductUpdate(int id)
        //{
        //    ProductUpdate productUpdate = db.ProductUpdates.Find(id);
        //    if (productUpdate == null)
        //    {
        //        return NotFound();
        //    }

        //    db.ProductUpdates.Remove(productUpdate);
        //    db.SaveChanges();

        //    return Ok(productUpdate);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductUpdateExists(int id)
        {
            return db.ProductUpdates.Count(e => e.Id == id) > 0;
        }
    }
}