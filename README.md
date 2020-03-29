# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To test without authorization

```
npm test
```

To test with authorization

```
npm run test:auth
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

## Сaesar cryptographer

### Running  Сaesar cryptographer

```
node caesar -a <action> -s <number> -i <filename> -o <filename>
```
### Сaesar options

````
-a, --action is requiered option. Should be one of encode/decode action.

-s, --shift is requiered option. Should be a number of shift. A number should be between 1 and 25 (count of ABC letters)

-i, --input is optional. If input is defined the text for encoding/decoding will be taken from it. If input is not defined, text will be taken from terminal input.

-o, --output is optional. If output is defined the text for encoding/decoding will be taken from it. If output is not defined, text will be put intoto terminal.
