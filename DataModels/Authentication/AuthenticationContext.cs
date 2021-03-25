using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataModels.Authentication
{
    public class AuthenticationContext:IdentityDbContext<User>
    {
        public AuthenticationContext(DbContextOptions options) : base(options)
        {}

        public DbSet<User> Users { get; set; }
    }
}
