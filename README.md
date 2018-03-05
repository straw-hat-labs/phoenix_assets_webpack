Asset pipeline using Webpack.

# RTFM lazy programmer :D

## What is inside?

- Elm
- Javascript
  - Babel
  - ESLint
  - Prettier
  - Service worker
- CSS
  - SASS
  - PostCSS
    - CSSNext
    - CSSNano
- Frameworks and Libraries
  - jQuery
  - Twitter Bootstrap 4
  - Font Awesome Icons

# Setup

Clone the repo replacing the `assets` folder of your project

```
git clone git@github.com:yordis/phoenix_assets_webpack.git    path/to/assets
cd path/to/assets
```

Install the packages

```
npm install
# or if you prefer yarn
yarn install
```

Change the watchers on `config/dev.exs` file.

```elixir
watchers: [npm: ["start", cd: Path.expand("../assets", __DIR__)]]
```

# What's next?

Hack your setup. Open issues and Repeat.
