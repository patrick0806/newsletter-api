# Cosmos ERP

## Project status: In Development

The api of a Tech News Letter, integrated with the New Yourk Times.

# API Development Process

This project is based on [NestJS](https://docs.nestjs.com/)

To running this project in dev mode you need threee things:

1. install dependences
2. Configure a local database
3. Run the app

These three steps are covered in sequence below

## Installation

```bash
yarn
```

## The Database (PostgreSQL)

#### Create database

```bash
  docker run --name newsletter-posrgres \
    -p 5432:5432 \
    -e POSTGRES_DB=newsletter \
    -e POSTGRES_USER=newsletter \
    -e POSTGRES_PASSWORD=123 \
    -d postgres:14.4-alpine
```

#### Stop Database

```bash
docker stop newsletter-posrgres
```

#### Remove database

```bash
docker rm my-schedule-postgres
```

## Running the app

First, you need create a `.env` file at the project root:

```bash
NY_TIMES_API_KEY=MnNBMTQ5djZPZW1WOG5Oa0haZndIeXlCSHpEclBOYkE=
```

Then, you can run as follows:

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod

```

# Reflection

I created this project to see what it would be like to start a product project from scratch, where I would have to make all the decisions and choose what to use, and come to understand more about integrations with other apis.

I still don't know how long this project will take to finish but I want to add some things to it as a study, to give a proper focus on them which are:

- Documentation
- TDD
- Tests (unitary)
- CI/CD
- Logs and monitorin

## Swagger route is http://localhost:3005/api-docs

## TODO

- add tratative for connectors
- add global handler error
- add logs
- add tests
- add type on connectors
- add documentation
