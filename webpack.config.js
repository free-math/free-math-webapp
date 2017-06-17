const path = require('path')

const DIST_DIR = path.resolve(__dirname, "dist") // Distribuition directory path
const SRC_DIR = path.resolve(__dirname, "src")   // Source directory path


const config = {
  entry: SRC_DIR + '/app/index.js', // Webpack starting point
  output: {                         // Object with Webpack output info
    path: DIST_DIR + '/app',        // Output path
    filename: 'bundle.js',          // Output filename
    publicPath: '/app/'             // Public folder. In the case, the same as output path
  },
  module: {                         // Webpack modules (For transpilling, etc)
    loaders: [                      // Loaders Array
      {
        test: /\.js?/,              // Regex to get every .js file
        include: SRC_DIR,           // Folder where to do the regex get
        loader: 'babel-loader',     // Will use the babel-loader on the files found
        query: {                    // Babel presets to use
          presets: [
            'react',
            'es2015',
            'stage-2'
          ]
        }
      },
      {
        test: /\.css$/,             // Look for css files
        include: [/node_modules/],  // Look into node_modules folder
        loader: [                   // ## Loads from bottom to top
          'style-loader',           // 2 - Inject the styles into the page
          'css-loader'              // 1 - Loads the css when importing into the Component
        ]
      }
    ],
  }
}

//Exporting everything
module.exports = config
