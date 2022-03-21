
using API;
using API.Controllers;
using Microsoft.Extensions.Logging;
using Moq;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace wis_unit.tests
{
    public class AccountControllerTests
    {
        [Fact]
        public void GetUsers_Returns_The_Correct_number_of_Users()
        {
            //Arrange 
            int expectedNumberofObject = 5;
            var loogerstub = new Mock<ILogger<WeatherForecastController>>();
            var controller = new WeatherForecastController(loogerstub.Object);

            //act
            var result = controller.Get();

            //assert
            Assert.Equal(expectedNumberofObject, result.Count());

        }
    }
}
