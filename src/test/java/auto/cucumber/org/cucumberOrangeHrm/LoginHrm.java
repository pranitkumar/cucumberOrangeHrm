package auto.cucumber.org.cucumberOrangeHrm;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginHrm {

	WebDriver driver;
	 
		// TODO Auto-generated method stub
		
		@Given("^I have site$")
		public void site_is_ready()
		{
		    // Write code here that turns the phrase above into concrete actions
		  
			System.setProperty("webdriver.chrome.driver", "Resource/chromedriver.exe");
			
			driver = new ChromeDriver();
			
			driver.get("http://opensource.demo.orangehrmlive.com/");
			
			driver.manage().window().maximize();
			
		}

		@When("^I entered credentials (\\w+) and (\\w+)$")
		public void i_validate_the_positive_flows(String username ,String password){
		    // Write code here that turns the phrase above into concrete actions
		  
			driver.findElement(By.id("txtUsername")).sendKeys(username);
			
			driver.findElement(By.id("txtPassword")).sendKeys(password);
			
			
		}
//
//		@Then("^I entered credentials pranit and pranitpass$")
//		public void i_validate_the_new_negative_flows(){
//		    // Write code here that turns the phrase above into concrete actions
//		  
//			driver.findElement(By.id("txtUsername")).sendKeys("pranit");
//			
//			driver.findElement(By.id("txtPassword")).sendKeys("pranitpass");
//			
//			
//		}

		
		@And("^click on login button$")
		public void check_login_done() {
		    // Write code here that turns the phrase above into concrete actions
			
			//driver.findElement(By.id("btnLogin")).click();
		
			String MyURL= "http://opensource.demo.orangehrmlive.com/index.php/dashboard";
			String ActualURL= driver.getCurrentUrl();


			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			driver.quit();
			
			Assert.assertEquals(ActualURL, MyURL);
			
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
		}
		
		@Then("^User should be logged in successfully$")
		public void check_login_() {
		
			driver.findElement(By.id("btnLogin")).click();
		
		}
	
}
