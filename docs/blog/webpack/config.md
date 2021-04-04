## webpack 优化
* noParse
    * 不去解析相关依赖
* IgnorePlugin
    * new webpack.IgnorePlugin(args1, args2), // 在args2中 匹配到args1就忽略
* dllPlugin: 动态链接库
    * 将第三个模块/库先打包,
      ```javascript
        // webpack.config.react.js
        module.exports = {
          entry: {
            react: ['react', 'react-dom']
          },
          output: {
            fileName: '_dll_[name].js',
            path: path.resolve(__dirname, 'dist'),
            library: '_dll_[name]'
          },
          plugins: [
            new webpack.DllPlugin({
              name: '_dll_[name]',
              path: path.resolve(__dirname, 'dist', 'mianfest.json')
            }), // 在args2中 匹配到args1就忽略
          ]
        }
      ```
    * 通过webpack内置的DllReferencePlugin引入
    ```javascript
      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          filename: "index.html"
        }),
        new webpack.DllReferencePlugin({
          manifest: path.resolve(__dirname,'dist', 'manifest.json')
        })
      ]
    ```
* happypack 多线程,提高打包速度
* 抽离公共模块
    ```javascript
      optimization: {
        // extracting-boilerplate
        runtimeChunk: 'single',
        splitChunks: {  // 分离公共模块
          cacheGroups: { // 缓存组
            vendors: { // 抽离第三方模块,打包到一起
              name: 'chunk-vendors',
              test: /[\\/]node_modules[\\/]/,
              priority: -10, // 执行优先级
              chunks: 'initial' // 执行时机???
            },
            common: {
              name: 'chunk-common',
              minChunks: 2,
              priority: -20,
              chunks: 'initial',
              reuseExistingChunk: true
            }
          }
        }
      }
    ```

```javascript
const webpack = require('webpack')
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {},
  output: {},
  externals: {},
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {}
  },
  module: {
    noParse: /jquery/,  // 不去解析jquery中的依赖库
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/, // 排除node_modules中的依赖
        include: path.resolve(__dirname, 'src'), // 包含src中的代码
        options: {
          cwd: path.resolve(__dirname, '../')
        }
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          // 目前几个问题：
          // 1. 目前对于css提取时，会有个空的JS文件，这个webpack在处理，目前先加载个也不是大问题
          // https://github.com/webpack/webpack/issues/1967
          // 2. css提取时，希望只提取出一个css文件，等待插件支持。 https://github.com/webpack-contrib/mini-css-extract-plugin/pull/348
          devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(args1, args2), // 在args2中 匹配到args1就忽略
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/' + (devMode ? '[name].css' : '[name].[hash].css')),
      chunkFilename: utils.assetsPath('css/' + (devMode ? '[id].css' : '[name].[id].[hash].css'))
    })
  ]
}
```