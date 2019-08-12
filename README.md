# Portfolio

- Portfolio website for [nilshah98](https://github.com/nilshah98)
- Made using Javascript & SASS along with HTML5
- Following best coding practices such as-
- - [7-1 arch](https://sass-guidelin.es/#the-7-1-pattern)
- - [BEM naming](http://getbem.com/naming/)

# Notes
## Webpack
### Done
- Webpack is used to make changes to your code, before it is actually deployed and executed
- Here, webpack setup to transpile ES6 and Sass, and also minify and autoprefix generated CSS code
- Webpack can also watch for changes, by activating the watch flag
- Rule for different file types, it contains `test` and `use`, the most minimal requirement, which file to include and which loader to use
- `Use` array has various loaders, and execution begins from the last element to the first, also has `options` as an object for various loaders
- Loaders can also have external files linking like for `postcss-loader`
- Plugins have to be configured beside the loaders, and can be used just like the loaders
- [Loader vs Plugin - webpack](https://stackoverflow.com/questions/37452402/webpack-loaders-vs-plugins-whats-the-difference)

### Todo
- Modules
- Caching
- Hot module reloading
- Source maps

## Live Server
- Using `live-server` npm package to serve the `index.html` file, more options can be found [here](https://www.npmjs.com/package/live-server)
- live-server supports live-reloading by default
- `npm install -g live-server`

