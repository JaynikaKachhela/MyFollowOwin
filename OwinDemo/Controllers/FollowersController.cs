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

namespace OwinDemo.Controllers
{
    [RoutePrefix("api/[controller]")]
    public class FollowersController : ApiController
    {
        private OwinContext db = new OwinContext();

        // GET: api/Followers/5
        [ResponseType(typeof(Followers))]
        [HttpPut]
        public IHttpActionResult GetFollowers(int id)
        {
            Followers followers = new Followers();
            followers.UserId = User.Identity.GetUserId();
            followers.ProductId = id;
            DateTime Now = DateTime.Now;
            followers.CreatedDate = Now;
            followers.LastModifiedDate = Now;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Followers.Add(followers);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = followers.Id }, followers);
        }

        // DELETE: api/Followers/5
        [ResponseType(typeof(Followers))]
        [HttpDelete]
        public IHttpActionResult DeleteFollowers(int id)
        {
            //Product p1 = db.Products.Find(id);
            var Id = User.Identity.GetUserId();
            Followers follower1 = new Followers();
            foreach(Followers follower in db.Followers.ToList())
            {
                if((follower.UserId==Id)&&(id==follower.ProductId))
                    follower1 = follower;
            }
            
            if (follower1 == null)
            {
                return NotFound();
            }

            db.Followers.Remove(follower1);
            db.SaveChanges();

            return Ok(follower1);
        }
        // GET: api/Followers
        [HttpGet]
        public IQueryable<Followers> GetFollowers()
        {
            var Id = User.Identity.GetUserId();
            List<Followers> followers = db.Followers.ToList();
            foreach (var follower in followers.ToList())
            {
                if (Id != follower.UserId)
                   followers.Remove(follower);
                }

            return followers.AsQueryable();
        }



        //// PUT: api/Followers/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutFollowers(int id, Followers followers)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != followers.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(followers).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!FollowersExists(id))
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

        //// POST: api/Followers
        //[ResponseType(typeof(Followers))]
        //public IHttpActionResult PostFollowers(Followers followers)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Followers.Add(followers);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = followers.Id }, followers);
        //}

        //// DELETE: api/Followers/5
        //[ResponseType(typeof(Followers))]
        //public IHttpActionResult DeleteFollowers(int id)
        //{
        //    Followers followers = db.Followers.Find(id);
        //    if (followers == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Followers.Remove(followers);
        //    db.SaveChanges();

        //    return Ok(followers);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FollowersExists(int id)
        {
            return db.Followers.Count(e => e.Id == id) > 0;
        }
    }
}