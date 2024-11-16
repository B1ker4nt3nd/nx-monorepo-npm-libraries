# NX monorpeo npm libraries

This monorepo's goal to demonstrate that npm packafges can be live in one nx monorepo and be used and build from here easily. 

## How to use

first run: `npm i`

Build the library with command: 

`
npx nx generate @nx/angular:library --directory=libs/first-lib-api --name=first-lib-api --publishable=true --importPath=@myorg/first-lib-api --no-interactive
`

You can see the result in dist folder
