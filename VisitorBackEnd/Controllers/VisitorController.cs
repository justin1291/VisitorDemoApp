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
            return _context.Visitors.OrderBy(field => field.InsertDate)
                         .ToList();
        }
      

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Visitor visitor)
        {
            if (visitor == null){
                return BadRequest();
            }
            _context.Visitors.Add(visitor);
            _context.SaveChanges();

            return Ok();
        }
    }
}
