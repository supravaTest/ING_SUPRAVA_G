package FirstCry_Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.junit.Assert;

import FirstCry_StepDef.FirstCry_StepDef;

public class HomePage extends FirstCry_StepDef
{
	Actions action= new Actions(driver);
	@FindBy(linkText="All Categories")
	public WebElement all_Catagory;
	
public HomePage(WebDriver driver)
{
	PageFactory.initElements(driver, this);
}
public void validateTitle()
{
	if(driver.getTitle().contains("firstcry"))
	{
		Assert.assertTrue(true);
	}
}
public void navigate_All_Categories()
{
	action.moveToElement(all_Catagory).build().perform();
	
}



}
