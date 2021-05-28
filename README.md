# Automation Training Test Framework

## Assumptions

* You're using either a Linux based OS or MacOSX
* Java, NPM and Node.js are installed on your machine

## Installation

Selenium-standalone relies on Java being installed to launch the various different browsers we use for automation. If
Java is not installed you will not be able to run the tests in this project, it is recommended that you install
*openjdk* using `brew install openjdk`. You can check if Java is installed by running the following in the terminal:

```bash
java -version
```

Open a terminal and check the version of NPM and Node.js installed by entering:

```bash
npm -v
node -v 
```

If the installed version is less than NPM 6.14.11 and Node.js v12.22.0 (updated on 03-30-2021) then you should install or
upgrade your current version.

## Pre-requisites

1. In the root of the project open a terminal and run `npm install`

__N.B.__ It is important you do this before proceeding, failure to do so will lead to you not being able to execute the
features or scenarios.

## Running Cucumber Tests

Everything is already setup to run the tests and *chrome* has been defined as the default browser. To use a different
browser update the `browserName` located in the `wdio.training.conf.js` file before executing the tests.

```JavaScript
capabilities: [
  {
    maxInstances: 1, // number instances in parallel
    browserName: "chrome",
    acceptInsecureCerts: true,
  },
]
```

To launch the tests run the `npm run test-training` command in the terminal. This will run all Features and Scenarios
within the project.

To run the features in parallel set the `maxInstances` in the capabilities section to an between 2-5. This is also found
in the `wdio.training.conf.js` file.

## Scenarios

Please complete the following scenarios to the best of your ability:

1. View details for the puppy Hanna, return to the puppy list
2. Verify that the puppy Maggie May is on the first page
3. Verify that the puppy Tipsy is on the second page
4. View the details for Twinky, and verify that their adoption fee is $22.50
5. View the details for Spud, click the Adopt Me! button, and then click the change your mind button
6. View the details for Hanna, click the Adopt Me! button, click the Adopt Another Puppy button, and adopt Maggie Mae.  
   Complete the adoption with credit card, and verify the adoption has been completed
7. Adopt Brook and add a travel carrier, and verify that the total amount has increased by the price of the carrier
8. Adopt Brook and Maggie Mae. Add a first vet visit and a collar and leash for Brook, and add a travel carrier for
   Maggie Mae. Complete the adoption with credit card, and verify the adoption has been completed

# automation-training
