Simple Node.js website to demonstrate CircleCI capabilities.

## Prerequisites
This project requires Node.js installed. This project assumes `yarn`, but commands can be run with `npm`.

## Setup & Run
1. Clone the repository and run `yarn` to install dependencies.
2. Run `yarn start` to start a simple web server serving the static assets.

## Test
The test uses [TestCafe](https://devexpress.github.io/testcafe/) to run UI tests. It also assumes Chrome and Firefox browsers available on the system.

1. Run `yarn test` to start simple Mocha tests.

## Deploy
[CircleCI](https://circleci.com/) is used to automatically run the tests and, upon manual approval, deploy the website to S3. We can technically remove the approval to fully automate the process, but having the approval is good for supervision before deployment.

The workflow consists of a `test` job which runs the TestCafe tests, and a `deploy` job that uses CircleCI's AWS-S3 Orb.

You can visit those jobs by clicking on the status badge above or clicking [here](https://circleci.com/gh/johnstonjacob/talkspace-demo).

