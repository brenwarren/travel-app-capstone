# Travel App Capstone

The **Travel App Capstone** is a web application that allows users to plan their trips by entering a city, country, and travel date. The app fetches relevant data such as weather forecasts, location details, and images of the destination using various APIs. Users can also save their travel summary as a PDF.

## Features

- Fetches location data using the [GeoNames API](http://www.geonames.org/export/web-services.html).
- Retrieves weather forecasts from the [Weatherbit API](https://www.weatherbit.io/).
- Displays destination images using the [Pixabay API](https://pixabay.com/api/docs/).
- Responsive and visually appealing UI built with SCSS.

- Pulls in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- Allows user to export the Travel Summary to PDF. Export to PDF button is hidden until the travel summary output is available. 
- Allows the user to add a todo list and/or packing list for their trip.


### Production Dependencies
- **[express](https://www.npmjs.com/package/express)**: Web framework for Node.js.
- **[body-parser](https://www.npmjs.com/package/body-parser)**: Middleware for parsing incoming request bodies.
- **[cors](https://www.npmjs.com/package/cors)**: Middleware for enabling Cross-Origin Resource Sharing.

### Development Dependencies
- **[webpack](https://webpack.js.org/)**: Module bundler.
- **[webpack-cli](https://www.npmjs.com/package/webpack-cli)**: Command-line interface for Webpack.
- **[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)**: Development server for Webpack.
- **[babel-loader](https://www.npmjs.com/package/babel-loader)**: Transpiles JavaScript files using Babel.
- **[@babel/core](https://www.npmjs.com/package/@babel/core)**: Babel compiler core.
- **[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)**: Babel preset for compiling ES6+.
- **[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)**: Simplifies creation of HTML files to serve Webpack bundles.
- **[mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)**: Extracts CSS into separate files.
- **[css-loader](https://www.npmjs.com/package/css-loader)**: Resolves CSS imports.
- **[sass-loader](https://www.npmjs.com/package/sass-loader)**: Compiles SCSS to CSS.
- **[style-loader](https://www.npmjs.com/package/style-loader)**: Injects CSS into the DOM.
- **[sass](https://www.npmjs.com/package/sass)**: SCSS compiler.

APIs Used
GeoNames API: Fetches location details based on the city and country.
Weatherbit API: Provides weather forecasts for the destination.
Pixabay API: Supplies images of the destination.
License

Author
Developed by Bren Warren.