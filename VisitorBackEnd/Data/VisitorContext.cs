using System;
using VisitorBackEnd.Models;
using Microsoft.EntityFrameworkCore;
namespace VisitorBackEnd.Data
{
    public class VisitorContext : DbContext
    {
        public VisitorContext(DbContextOptions<VisitorContext> options) : base(options)
        {
        }

        public DbSet<Visitor> Visitors { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Visitor>().ToTable("Visitor");
        }
    }
}
