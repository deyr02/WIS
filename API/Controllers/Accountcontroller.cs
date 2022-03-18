using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using API.DTOs;
using API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;

namespace API.Controllers
{
    [ApiController]
    [Route("api/account")]
  
    public class AccountcontrollerController : ControllerBase
    {
        private UserManager<AppUser> _userManager;
        private SignInManager<AppUser> _signInManager;
        public AccountcontrollerController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public  async Task<ActionResult<AppUserDTO>> Login( LogInDTO loginDTO){

            var user = await _userManager.Users
                    .FirstOrDefaultAsync(x => x.Email == loginDTO.Email);

            if (user == null) return Unauthorized("Invalid email");
            //if (!user.EmailConfirmed) return Unauthorized("Email not confirmed");
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDTO.Password, false);

            if (result.Succeeded)
            {
               // await SetRefreshToken(user);
               // return createUserObject(user);
               return Ok(CreateUserObject(user));
            }

            return Unauthorized("Invaild Username or password.");

        }


        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<AppUserDTO>> Register(RegisterDTO registerDto)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem();
            }          

            var user = new AppUser
            {
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                DOB = registerDto.DOB,
                Email = registerDto.Email,
                UserName = registerDto.Email
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded) return BadRequest("Problem registering user");

            return Ok("Registration success");

        }

        [HttpGet]
        public  IActionResult Get (){
           
           var users =  _userManager.Users;
            List<AppUserDTO> appUserDTo = new List<AppUserDTO>();

            foreach (var User in users){
                appUserDTo.Add(CreateUserObject(User));
            }
            return Ok(appUserDTo);
        }


        private AppUserDTO CreateUserObject(AppUser user){
            return new AppUserDTO{
                LastName = user.LastName,
                FirstName =user.FirstName,
                Eamil = user.Email,
                DOB = user.DOB
            };
        }
        
    }

}