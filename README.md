# WeatherWire

A weather-focused workspace for locations, observations, and alert notes.

## What this starter does

- Add, edit, delete, and search records.
- Keeps data in this browser using local storage.
- Uses no external AI calls, sample-generated results, or automatic publishing.

## Run locally

Serve this folder with any static web server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Data stays in the current browser profile and is not synced to a server.

## Next steps

Add a backend, authentication, and integrations only when the project needs shared or automated data. Do not store private credentials in the browser.
