const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Template',
      template: 'src/assets/test.html'
    }),
  ],
};

const prodConfig = () => commonConfig;
const devConfig = () => {
  const config = {
    devServer: {
      host: '0.0.0.0',
      port: 8080
    },
  };

  return Object.assign({}, commonConfig, config);
};

module.exports = (env) => {
  console.log('env', env);
  
  return (env == 'production') ? prodConfig() : devConfig();
};
