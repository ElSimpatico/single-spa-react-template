# Single SPA React Template

The aim of this repository is provide the initial structure to start to work in a Microfront-end for React applications and Single SPA.

This project is a template that includes the following configurations to standarize the code formatting:

-   prettier: you can edit the `.prettierrc.json` file to override the basic configuration.
-   eslint: you can edit the `.eslintrc.json` file to override the basic rules.
-   husky: husky allows create git hooks to standarize your commits. You can see the [husky documentation](https://typicode.github.io/husky/#/). The basic configuration includes two hooks:
    -   pre-commit: run prettier and eslint to validate the code format.
    -   commit-msg: run commitlint to validate the commit message format following conventional commit.

## Override template files

When you create the new repository from this template you must to change some fields to specify your custom project values.

1.  `package.json` file

    -   name
    -   description
    -   repository
    -   author

## Start to work

1.  Create the new repository from `single-spa-react-template` template.
2.  Open the terminal and clone the new repository

    ```
        $ git clone [REPOSITORY URL]
    ```

3.  Install yarn globally (If not already installed)

    ```
        $ npm install --global yarn
    ```

4.  Go to project folder and install dependencies

    ```
        $ cd [FOLDER NAME]
        $ code . // Open vscode
        $ yarn install
    ```

## Available scripts

`yarn start`

Run application in development mode and serve in http://localhost:3000

`yarn build`

Build the library components in production mode

`yarn lint`

Analyze the code to find problems.

`yarn analyze`

Run the webpack bundler analyzer to visualize size of webpack output files with an interactive zoomable treemap.
