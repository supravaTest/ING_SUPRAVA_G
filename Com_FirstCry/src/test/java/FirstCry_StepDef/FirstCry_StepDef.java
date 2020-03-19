package FirstCry_StepDef;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.BrokenBarrierException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import FirstCry_Pages.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FirstCry_StepDef
{
	public WebDriver driver;
	public Properties property;
	public HomePage hp;
	

	@Before
	public void initialization() throws IOException
	{
			property = new Properties();
	
			FileInputStream ip = new FileInputStream("./src/test/resources/FirstCryConfig/FirstCryConfig.properties");
			property.load(ip);
	}
		
	
	@Given("launch the firstcry URL")
	public void launchBrowser()
	{
		String browsers=property.getProperty("browser");
		
		if(browsers.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", "./Resources/chromedriver.exe");
			driver = new ChromeDriver();
		} 
		else if (browsers.equalsIgnoreCase("firefox"))
		{
			System.setProperty("webdriver.gecko.driver", "");
			driver = new FirefoxDriver();
		}
		
		driver.manage().window().maximize();

		driver.get(property.getProperty("URL"));
	}
	
	

	@Then("Validate the browser launched successfully")
	public void validate_the_browser_launched_successfully() 
	{
		hp.validateTitle();
	}

	@When("Navigate to {string} link")
	public void navigate_to_link(String string) 
	{
		hp.navigate_All_Categories();
	}

	@After
	public void closeBroser()
	{
		driver.close();
	}
}
