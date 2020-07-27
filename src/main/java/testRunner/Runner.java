package testRunner;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = {"./src/main/java/feature"}, 
glue = {"stepDefinition"},
monochrome =true,
plugin = {"pretty","html:test-output","junit:target/cucumber.xml"},
dryRun = false,
strict = false

)

@Test
public class Runner extends AbstractTestNGCucumberTests{

}
