# Berlin Clock

![Alt text](https://upload.wikimedia.org/wikipedia/commons/4/4f/Berlin-Uhr-1650-1705.gif "Berlin Clock")

## About this Kata

This is performed using **Test Driven Development** (TDD).

## Rules

The Berlin Clock (Mengenlehreclock or Berlin Uhr) is a clock that tells the time using a series of illuminated coloured blocks, as you can see in the picture for this project.

The top lamp blinks to show seconds- it is illuminated on even seconds and off on odd seconds.

The next two rows represent hours. The upper row represents 5 hour blocks and is made up of 4 red lamps. The lower row represents 1 hour blocks and is also made up of 4 red lamps.

The final two rows represent the minutes. The upper row represents 5 minute blocks, and is made up of 11 lamps- every third lamp is red, the rest are yellow. The bottom row represents 1 minute blocks, and is made up of 4 yellow lamps.

[Requirement](https://github.com/stephane-genicot/katas/blob/master/BerlinClock.md)

## Assumptions

1. The Time set as an arguement is received from system time. So empty and null cases are not unit tested, as its not expected from the system.

2. As mentioned in the above KATA requirement, presenter is currently returning the berlinTime in this format 'ORRRRRRROYYRYYRYYRYYYYYY'. Because of this requirement, there is a need of a logic in the view to turn on/off the light based on its respective color status.

## Get Started

### `npm install`

Install all project dependencies

If denied due to permission issue, execute `sudo npm install` (in macOS) or run as administrator in Windows.

### `npm start`

Runs the app <br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
In order to run in different port please refer top answer from [stack overflow](https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project)

### `npm test`

Launches the test runner and generates code coverage report under /coverage folder.<br>

Testing framework used : [Mocha](https://mochajs.org)
Mocha is a feature-rich JavaScript test framework running on Node.js, making asynchronous testing simple and fun.

## Code Commiting Guidelines:

Inspired from [Udacity](https://udacity.github.io/git-styleguide/)

- chore: updating build tasks, package manager configs, initial commit, etc.. no production code change
- docs: changes to documentation (Readme file)
- feat: a new feature with test case
- fix: a bug fix
- style: formatting, missing semi colons, etc.. no code change
- refactor: refactoring production code
- test: Refactoring test; no production code change
