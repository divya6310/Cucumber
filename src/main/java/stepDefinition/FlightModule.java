package stepDefinition;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlightModule {
	public static WebDriver driver;
		
	@Given ("^open the Firefox browser and launch the application with \"(.*)\"$")
	public void open_Firefox_launch_application(String url)
	{
		System.setProperty("webdriver.gecko.driver","./drivers/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		driver.get(url);
			
	}
	
	@When ("^user navigate to Product and click on Flights Module$")
	public void user_navigate_Product_click_Flights()
	{
		driver.findElement(By.xpath("//*[@d='M2 2l12 12'][1]")).click();
		driver.findElement(By.linkText("Flights Module")).click();
	}

@Then("^verify the title of  Flights Module$")

	public void verify_title_Flights()
	{
	System.out.println(driver.getTitle());
	 assertTrue(driver.getTitle().equals("Flgihts booking module features - PHPTRAVELS"));
	}
@Then("^Close the browser$")
public void closeBrowser()
{
	driver.close();
}

@When("^user navigate to Explore Demo$")
public void user_navigate_to_Check_Pricing() {
    driver.findElement(By.xpath("//b[text()='Demo']")).click();
    
}

@Then("^user select the FrontEnd HomePage$")
public void user_select_the_FrontEnd_Homepage() {
	
	driver.findElement(By.xpath("//small[text()='http://www.phptravels.net']")).click();
}

@And("^select the Flights option$")
public void select_Flights_option()
{
	driver.findElement(By.linkText("\r\n" + 
			"         Flights        ")).click();;
}
}
