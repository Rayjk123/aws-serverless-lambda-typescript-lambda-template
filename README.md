# AWS Node.js 12 Lambda with Typescript and Serverless
AWS Lambda Template for creating an AWS Lambda running on Node.js 12,
written in Typescript, and run/deployed on Serverless.

## Running Locally
Run `npm start` to start the program locally. 

The Lambda is invoked with the data in the `event.json` locally, so update the `event.json` in order
to test custom data.

## Deploying
Run `npm run deploy` to deploy both the function and infrastructure.

In order to just make an update to already deployed lambda code. Run `npm run update`

## Linting
Run `npm run lint` to check for linting and formatting issues. Simple issues can be
fixed by running `npm run lint-fix`.
