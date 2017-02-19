Asset pipeline using `webpack@2` for `phoenix@1.3`.

# RTFM lazy programmer :D

Even when the setup is built for `phoenix@1.3` out of the box the build is easier to customize. You could fix the `OUTPUT_PATH` value in `webpack.config.js` file and everything should work as normal.

## What is inside?

- Javascript
  - Babel
- CSS
  - SASS
  - PostCSS
    - Autoprefixer
- Frameworks and Libraries
  - Twitter Bootstrap 4

# Setup

1. Clone the repo replacing the `assets` folder of your project
  ```
  $ git clone git@github.com:yordis/phoenix_assets_webpack.git   path/to/assets
  $ cd path/to/assets
  ```

2. Install the packages
  ```
  $ npm install

  # or if you prefer yarn
  $ yarn install
  ```

3. Change the watchers on `config/dev.exs` file.
  ```elixir
  watchers: [npm: ["run", "dev",
    cd: Path.expand("../assets", __DIR__)]]
  ```

# What's next?
Hack your setup. Open issues and Repeat.
