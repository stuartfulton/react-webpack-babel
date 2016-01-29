# react-webpack-babel

A basic React.js project with Webpack and Babel already configured. The React components contain a lot of comments.

## tl;dr

Click the Download ZIP button above, extract it on your computer, and view index.html.

## What it does

You type (or paste) into the text field, and it displays a histogram of how many times each alphabetical character appears in your text.

## Process for changing the code

This project uses JavaScript preprocessed by Webpack and Babel. I have included the results of that processing in source control so you can run it just by double-clicking on index.html. However, if you want to change the code and see the results of those changes, you must follow the process below.

## Get Node.js and NPM

This software stack requires __Node.js__ and __npm__ in order to work.

Install Node.js [here](https://nodejs.org/en/download/).

__npm__ is installed along with node.js

## Install the Node modules

On the command line, navigate to the base directory of this project and type `npm install`. (On Windows, I suggest you search for PowerShell, then right-click on the result and choose "Run as Administrator.")

Additionally, run the command `npm install -g webpack` in order to install Webpack globally. You'll need this in order to precompile the code if you make changes.

## Run Webpack

On the command line, type `webpack -w`. This precompiles code from the `src` directory and dumps the result in the `dist` directory. This is configured in `webpack.config.babel.js`. For quick instruction on Webpack, refer to [this cheat sheet](https://github.com/petehunt/webpack-howto) from Pete Hunt, one of the authors of React, and a Webpack evangelist.

The `-w` flag tells Webpack to watch for additional changes. If you use the `-w` flag, the process will run continuously in the console. On Windows, `Ctrl-C` stops the process. This is useful to know, because I find that it sometimes hangs and must be restarted in order to register new changes. Webpack's initial precompilation is slow, but its on-the-fly compilation is quite fast.

## Helpful facts

On Windows, npm modules installed using the `-g` (global) flag are installed in `C:\Users\[YourUserDirectory]\AppData\Roaming\npm\node_modules`

The way that the Babel transpiler (`babel-loader`) works with Webpack recently changed. The `es2015` and `react` plugins are now configured in a file named `.babelrc` that lives in the root of the project. The webpack config file must be named `webpack.config.babel.js` in order to signify that it should look for this file. Older online documentation may not reflect this fact.
