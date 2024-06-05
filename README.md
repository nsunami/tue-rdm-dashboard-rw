# Dashboarding TU/e datasets on 4TU.ResearchData

[![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](https://www.repostatus.org/badges/latest/concept.svg)](https://www.repostatus.org/#concept)

A dashboard for TU/e datasets on 4TU.ResearchData.

## How to run

The project uses [RedwoodJS](https://redwoodjs.com/)

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (=20.x) and [Yarn](https://yarnpkg.com/)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Start by installing dependencies:

```bash
yarn install
```

Create a `.env` file and set the `DATABASE_URL` to your Postgres instance.

```bash
DATABASE_URL=URL_TO_YOUR_POSTGRES
```

Seed the database:

```bash
yarn rw exec seed
```

Note: the seeding script can also be used to manually update the app's database with the data at 4TU.ResearchData.

Start the development server:

```bash
yarn redwood dev
```

Your browser should automatically open to [http://localhost:8910](http://localhost:8910) where you'll see the Welcome Page, which links out to many great resources.
