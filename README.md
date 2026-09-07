# PSA Grader Pro

AI-powered PSA card grading tool. A small Express server serves the web UI
(`index.html`) and proxies grading requests to the Anthropic Messages API.

## Run locally

```bash
npm install
npm start
```

The app listens on `http://localhost:3000` (override with the `PORT`
environment variable).

## Run with Docker

Build the image and run it, mapping the container's port 3000 to your host:

```bash
docker build -t psa-grader-pro .
docker run -p 3000:3000 psa-grader-pro
```

Then open `http://localhost:3000`.

To run on a different host port, remap the left side, e.g. `-p 8080:3000`.

## How it works

- `server.js` — Express server: serves static files and exposes
  `POST /api/messages`, which forwards to `https://api.anthropic.com/v1/messages`
  using the `x-api-key` header supplied by the client.
- `index.html` — the single-page web UI.

The Anthropic API key is passed per request from the client (via the
`x-api-key` header) and is never baked into the image.
