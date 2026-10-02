# core-html

A small historical HTML/CSS/JavaScript starter with a native button that cycles
the page through light, dark and color modes. The implementation is in
[`docs/index.html`](docs/index.html), [`docs/css/styles.css`](docs/css/styles.css)
and [`docs/js/app.js`](docs/js/app.js).

## Preview without tooling

With Python 3 installed, run from the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:8000` and stop with Ctrl+C. There is no backend,
environment-variable configuration or provider connection.

## Original development workflow

The committed npm lock and manifest configure BrowserSync 2 for live reload:

```sh
npm ci
npm start
```

`npm start` watches `docs/` and opens an external preview address. Use the
loopback static preview above if you only need to inspect the page. No automated
tests, lint command, build step or CI workflow are configured. The historical
dependency install was not revalidated on a current Node runtime in this review.

For changes, check the button's three modes, keyboard operation and a narrow
viewport, and report actual results. See [LICENSE](LICENSE) for the MIT terms.
