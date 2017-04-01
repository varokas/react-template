const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Template',
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
