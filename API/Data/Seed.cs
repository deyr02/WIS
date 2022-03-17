using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Model;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedData (DataContext context, UserManager<AppUser> userManager){
            if (!userManager.Users.Any()){
                var users = new List<AppUser>{

                new AppUser {
                    FirstName = "Rajib",
                    LastName= "Dey",
                    DOB = DateTime.Parse("01 Mar 1988"),
                    Email= "rajib_dey@rocketmail.com",
                    UserName = "Rajib_dey"

                },
                 new AppUser {
                    FirstName = "Polash",
                    LastName= "Paul",
                    DOB = DateTime.Parse("15 Mar 1988"),
                    Email= "polash_paul@rocketmail.com",
                    UserName = "Polash_paul"


                }, new AppUser {
                    FirstName = "Partheo",
                    LastName= "Sumon",
                    DOB = DateTime.Parse("01 Mar 1988"),
                    Email= "partho_sumon@rocketmail.com",
                    UserName = "Partho_summon"


                }, new AppUser {
                    FirstName = "Ripon",
                    LastName= "Saha",
                    DOB = DateTime.Parse("01 Mar 1988"),
                    Email= "ripon_saha@rocketmail.com",
                    UserName = "Ripon_saha"


                }
            };

            foreach (AppUser user in users){
               await userManager.CreateAsync(user, "P@ssw0rd");
            }
                
            }
            
            
        }
    }
}