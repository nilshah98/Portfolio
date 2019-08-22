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


## Animations
### Done
- Using [AOS](https://github.com/michalsnik/aos) to do basic fade-in fade-out on scroll animation in heading vertical lines
- Can't figure out how to enable AOS even for scroll-up, using `mirror` attribute for now
- For the navbar animation, getting the whole height of the document, since it is loaded in one shot, and no lazy loading or infinite scroll
- Then dividing it into sections and toggling classes on the current location of the page
- Current location of page calculated usin `window.pageYoffset` and accordingly different classes toggled
- Using `scroll` event on the window to hit it every time

### Todo
- Scroll-up animation AOS
- Decreasing polling rate for `scroll` event
- Alternative to `scroll-behaviour` property for smooth-scroll

## Components

### Toggle
#### Done
- Created a toggle switch from scratch, by using `checkbox` elements and [before](https://css-tricks.com/almanac/selectors/a/after-and-before/) psuedo element
- Manipluated it using the `checked` property of the same
- Event listener used - `changed` on the input box
- Can be found under `components/_toggle`
#### Todo
- Beautify the component

### Heading
#### Done
- Under `heading__container` three components- `backdrop`, `image` and `heading`
- Backdrop and heading absolutely placed, and image holding the container size together, else it will collapse
- Used illustrations from [undraw](https://undraw.co/illustrations) for heading component
- Heading component has - `number`,`break` and `vertical` all aligned using flex 
- Used the property `writing-mode` and `text-orientation` to get vertical text
- Used AOS library for scroll animations for vertical break bar
#### Todo
- Beautify the backdrop, *maybe polka dots*