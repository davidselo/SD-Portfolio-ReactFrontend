# SD-Portfolio-ReactFrontend

Frontend project to create a personal portfolio consuming a GraphQL API to create content blocks on the website.

The project desing is been written down on [this](https://miro.com/app/board/o9J_l7Vlem8=/) miro board, please have a look if you have any questions

## How to start the project

### Local environment: 

-   Open your terminal on the project folder and run the next command: `yarn && yarn start`

### Docker environment: 

- Open your terminal on the project folder and run the next command: `docker-compose up -d`


## Unit Test:

### Docker

1. Make sure the container with the React app is running before you run the tests `docker-compose up -d`
2. Open the terminal on the project folder and run the next command `docker-compose exec app yarn test`

### Local Environment: 
-   Running tests on watch mode: `yarn run test -- --watch`.

## Running Lint: 

### Docker environment

1. Make sure the container with the React app is running before you run the tests `docker-compose up -d`
2. Open the terminal on the project folder and run the next command `docker-compose exec app yarn lint`

### Local Environment: 
- Open the terminal on the project folder and run the next command `yarn run lint`




