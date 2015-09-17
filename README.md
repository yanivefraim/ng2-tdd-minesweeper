# Introduction

This is an ng2 hackathon playground for Demonstrating TDD in Angular 2.0!
Our goal is to build the Mine Sweeper game, TDD!! 

We want to feel how TDD / unit testing works on Angular 2.0, and compare it to what we know on Angular 1.X.

# Our impressions

We did not have time to write the game, so we wanted to build the main component (```board```), receive its data from a service (```MineService```) and "feel" how unit tests works for Angular 2.0.

1. Writing the component and binding it to the service were pretty straightforward.
2. Testing the Component felt similar to testing an Angular 1.x directive
3. We had a lot of new Jasmine / Unit test stuff (arriving with [angular-seed](https://github.com/mgechev/angular2-seed) project). It was different from what we know on Angular 1.x. We would like to better understand how ```AsyncTestCompleter``` and ```TestComponentBuilder``` works.
4. Console error messages are hard to read /debug (much harder than Angular 1.X).
5. Unit testing with native ```DOM.querySelectorAll``` is cool (:



#Comments
1. Windows users - the following issues when running "npm install" (related to angular-seed). We fixed it (will add a PR to ```mgechev```)
	'.' is not recognized as an internal or external command
	To fix that need to change lines 165,166,167 to Windows style path for example: 
		'.\\node_modules\\.bin\\tsd reinstall --overwrite'
