# RN - Module

React Native custom module created with React Native Project example.

- React Native Module
- React Native Example App

## Steps

- First step is to create a new React Native App.
- Configure the `tsconfig.json` file to work for a module.
- Create `lib` folder and add the necessary logics for the module.
- Use the `lib` folder inside Demo app for testing the lib.
- Build the `lib` module and generate the `tarball` file if needed locally.

On the `package.json` file,

- Describe the module name in the `package.json`. Ex: `"@project/module"`
- Declare `main, typings, build scripts`.
- Configure `peerDependencies` and `devDependencies` in `package.json`.
