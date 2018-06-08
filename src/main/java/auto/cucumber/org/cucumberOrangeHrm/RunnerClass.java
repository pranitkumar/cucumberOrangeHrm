package auto.cucumber.org.cucumberOrangeHrm;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;



//@RunWith(Cucumber.class)
@CucumberOptions
(       features="Feature",
		glue="auto.cucumber.org.cucumberOrangeHrm",
		plugin={"pretty:STDOUT","html:target/HTMLCucumberPranit"}
		
)

public class RunnerClass extends AbstractTestNGCucumberTests {
	
	
	@Test
	public void t()
	{
		
	}

}
