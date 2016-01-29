# react-webpack-babel

A basic React.js project with Webpack and Babel already configured

Open index.html, type into the text box, and watch React display the count of each alphabetical character.

The React components contain a lot of comments.

## Just run it

This project uses JavaScript preprocessed by Webpack and Babel. I have included the results of that processing in source control, _so you should be able to run it just by double-clicking on index.html._ However, if you want to change the code and see the results of those changes, you must follow the process below.

## Get Node.js and NPM

This software stack requires __Node.js__ and __npm__ in order to work.

Install Node.js [here](https://nodejs.org/en/download/).

__npm__ is installed along with node.js

## Get the code

If you have Git installed, you can download the code with the following console command:

    git clone https://github.com/stuartfulton/react-webpack-babel.git your-file-path-and-new-directory-name

If not, you can click the __Download ZIP__ button near the top right corner of this Github page.

## Install the Node modules

On the command line, navigate to the base directory of this project and type `npm install`. (On Windows, I suggest you search for PowerShell, then right-click on the result and choose "Run as Administrator.")

Additionally, run the command `npm install -g webpack` in order to install webpack globally. You'll need this in order to precompile the code if you make changes.

## Run Webpack

On the command line, type `webpack -w`. This precompiles code from the `src` directory and dumps the result in the `dist` directory. This is configured in `webpack.config.babel.js`. For quick instruction on Webpack, refer to [this cheat sheet](https://github.com/petehunt/webpack-howto) from Pete Hunt, one of the authors of React, and a Webpack evangelist.

The `-w` flag tells Webpack to watch for additional changes. If you use the `-w` flag, the process will run continuously in the console. On Windows, `Ctrl-C` stops the process. This is useful to know, because I find that it sometimes hangs and must be restarted in order to register new changes. Webpack's initial precompilation is slow, but its on-the-fly compilation is quite fast.
