# react-redux-saga

The project was generated from `create-react-app` and then I included a few libraries.

## Features

- React-Router 4
- Material UI
- Semantic UI
- Redux
- Redux Saga
- ESlint
- Airbnb's ESlint rules

## Installation

Download the zip file, unzip:
Go to folder git-repo-finder and install using `npm install`

To create a production bundle, use `npm run build` or `yarn build`.

## Running locally

To run locally, use `npm start`

## Running Test

To run test, use `npm run test`

## Improvement Suggestions

Currently in project, I used class components and life cycle hook. A possible improvement is using functional components and react hooks. useState hooks are used in functional components for modifying states. useEffect() hook can be used instead of componentDidMount() for functional components.

I added .env file with a flag SKIP_PREFLIGHT_CHECK=true. Locally after I installed jest and enzyme files, my npm start was throwing error. This flag fixed the issue.

For testing, I could add more test coverage.
