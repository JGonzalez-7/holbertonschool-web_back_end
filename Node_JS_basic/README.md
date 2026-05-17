# Node JS Basic

This directory contains introductory Node.js exercises focused on console output, standard input, file reading, HTTP servers, Express servers, and a small organized Express API.

## Requirements

- Node.js
- npm

Install dependencies from this directory:

```bash
cd Node_JS_basic
npm install
```

## Files

| File | Description |
| --- | --- |
| `0-console.js` | Exports a `displayMessage` function that prints a message to the console. |
| `1-stdin.js` | Reads a user's name from standard input and prints a closing message when input ends. |
| `2-read_file.js` | Synchronously reads `database.csv` and logs student counts by field. |
| `3-read_file_async.js` | Asynchronously reads `database.csv` and logs student counts by field using a Promise. |
| `4-http.js` | Creates a basic Node HTTP server on port `1245`. |
| `5-http.js` | Creates a Node HTTP server with `/` and `/students` routes. |
| `6-http_express.js` | Creates a basic Express server on port `1245`. |
| `7-http_express.js` | Creates an Express server with `/` and `/students` routes. |
| `database.csv` | Sample student database used by the file-reading and server exercises. |
| `full_server/` | Organized Express server using routes, controllers, and utility modules. |

## Scripts

Run lint checks:

```bash
npm run lint
```

Run tests:

```bash
npm test
```

Run the development server script:

```bash
npm run dev
```

## Usage Examples

Run the stdin exercise:

```bash
node 1-stdin.js
```

Run the basic HTTP server:

```bash
node 4-http.js
```

Then visit:

```text
http://localhost:1245/
```

Run the HTTP server that reads the database:

```bash
node 5-http.js database.csv
```

Available routes:

```text
GET /          -> Hello Holberton School!
GET /students  -> Student count grouped by field
```

Run the Express server:

```bash
node 7-http_express.js database.csv
```

## Full Server

The `full_server` directory separates the Express application into:

- `server.js`: creates the Express app and mounts routes.
- `routes/index.js`: defines the application routes.
- `controllers/AppController.js`: handles the homepage route.
- `controllers/StudentsController.js`: handles student routes.
- `utils.js`: reads and groups student data from the CSV database.

Run the full server with Babel:

```bash
./node_modules/.bin/babel-node --presets babel-preset-env full_server/server.js database.csv
```

Full server routes:

```text
GET /                    -> Hello Holberton School!
GET /students            -> List students grouped by field
GET /students/:major     -> List students for CS or SWE
```

Valid `:major` values are:

```text
CS
SWE
```

Example:

```text
http://localhost:1245/students/CS
```
