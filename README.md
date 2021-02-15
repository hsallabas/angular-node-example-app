# Angular Frontend - RESTful API Node Server - Sequelize -PostgreSql

## Backend

Running locally:

```bash
npm install
```

```bash
npm run dev
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# POSTGRE
DATABASE_HOST=localhost
DATABASE_DIALECT=postgres
DATABASE_NAME=postgres
DATABASE_USER=postgres
DATABASE_PASSWORD=Ankara06

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=60
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=60
```
## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\


## Frontend

Running locally:

```bash
npm install
```

```bash
npm run start
```
