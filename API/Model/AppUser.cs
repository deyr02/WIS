using System;
using Microsoft.AspNetCore.Identity;

namespace API.Model
{
    public class AppUser: IdentityUser<Guid>
    {
        public string FirstName{get; set;}
        public string LastName { get; set; }
        public DateTime  DOB {get; set;}
    
    }

    public class Role: IdentityRole<Guid>{
        
    }
}