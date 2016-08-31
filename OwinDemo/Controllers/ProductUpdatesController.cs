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
using System.Web;
using System.IO;

namespace OwinDemo.Controllers
{
    public class ProductUpdatesController : ApiController
    {
        private OwinContext db = new OwinContext();

      
        // POST: api/ProductUpdates
        [ResponseType(typeof(ProductUpdate))]
        [HttpPost]
        public IHttpActionResult PostProductUpdate(ProductUpdate productUpdate)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            //string filePath = productUpdate.Media;
            //var postedFile = HttpContext.Current.Request.Files[filePath];
            //string uploadFolderPath = HttpContext.Current.Server.MapPath("~/App_Data/UploadedMedia"+postedFile.FileName);
            //postedFile.SaveAs(filePath);
            //productUpdate.Media=uploadFolderPath;
            
            DateTime Now = DateTime.Now;
            productUpdate.CreatedDate = Now;
            productUpdate.LastModifiedDate = Now;
            db.ProductUpdates.Add(productUpdate);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = productUpdate.Id }, productUpdate);
        }

        // GET: api/ProductUpdates/5
        [ResponseType(typeof(ProductUpdate))]
        [HttpGet]
        public IQueryable GetProductUpdate(int id)
        {
            Product product = db.Products.Find(id);

            List<ProductUpdate> productUpdates = db.ProductUpdates.ToList();
           foreach(var productUpdate in productUpdates.ToList())
            {
                if (!(productUpdate.ProductId == product.Id))
                    productUpdates.Remove(productUpdate);
            }
            return productUpdates.AsQueryable();
        }


        //// GET: api/ProductUpdates
        //public IQueryable<ProductUpdate> GetProductUpdates()
        //{
        //    return db.ProductUpdates;
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