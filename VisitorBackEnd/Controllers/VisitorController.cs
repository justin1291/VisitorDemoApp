using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VisitorBackEnd.Models;
using VisitorBackEnd.Data;

namespace VisitorBackEnd.Controllers
{
    [Route("api/[controller]")]
    public class VisitorController : Controller
    {
        private readonly VisitorContext _context;
        public VisitorController(VisitorContext context) {
            _context = context;
        }

        // GET api/visitor
        [HttpGet]
        public IEnumerable<Visitor> Get()
        {
          return _context.Visitors.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
