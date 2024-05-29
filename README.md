# Dashboarding TU/e datasets on 4TU.ResearchData

[![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](https://www.repostatus.org/badges/latest/concept.svg)](https://www.repostatus.org/#concept)

A dashboard for TU/e datasets on 4TU.ResearchData.

Currently, data ingestion is done by a separate Node.js script ([get-4tu-data](https://github.com/nsunami/get-4tu-data)).




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

Then start the development server:

```bash
yarn redwood dev
```

Your browser should automatically open to [http://localhost:8910](http://localhost:8910) where you'll see the Welcome Page, which links out to many great resources.



## Database

See the [`schema.prisma`](api/db/schema.prisma) file in `api/db`, for the database schema.

Create a `.env` file and set the `DATABASE_URL` to your Postgres instance.

```bash
DATABASE_URL=URL_TO_YOUR_POSTGRES
```

To populate the database use this separate Node.js script ([get-4tu-data](https://github.com/nsunami/get-4tu-data)).
