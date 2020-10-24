# vue-cli4打包优化

## dll打包

### 新建webpack.dll.conf.js文件

```
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vender: ['vue', 'vue-router', 'axios', 'vuex']
  },
  output: {
    path: path.join(__dirname, '../public/static'),
    filename: "[name].dll.js",
    library: "[name]_library"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, ".", "[name]-manifest.json"),
      name: "[name]_library"
    })
  ]
}

```

### 在package.json中的scripts添加

```
"dll": "webpack --config build/webpack.dll.conf.js"
```

### 在vue.config.js中的configureWebpack添加

```
// dll优化
config.plugins.push(new webpack.DllReferencePlugin({
	context: process.cwd(), //当前目录
	manifest: require('./build/vender-manifest.json')
}))
// 将打包出来文件动态引入index.html
config.plugins.push(
    new AddAssetHtmlPlugin({
    // dll文件位置
    filepath: path.resolve(__dirname, './public/static/vender.dll.js'),
    // dll 引用路径
    outputPath: '/static/', // 输出的目录地址
	})
)
```

## 拆包

```
config.optimization = {
        splitChunks: {
          chunks: 'all', // 仅提取按需载入的module
          cacheGroups: { // 缓存组配置，默认有vendors和default
            'vendors': {
              test: /[\\/]node_modules[\\/]/, // 匹配需拆分chunk的目录
              priority: -20
            },
            'element-ui': {
              name: 'element-ui',
              test: /[\\/]node_modules[\\/]element-ui[\\/]/,
              priority: -10
            },
            'echarts': {
              name: 'echarts',
              test: /[\\/]node_modules[\\/]echarts[\\/]/,
              priority: -10
            },
            'element-china-area-data': {
              name: 'element-china-area-data',
              test: /[\\/]node_modules[\\/]element-china-area-data[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2, // 覆盖外层minChunks,用于提取被引用指定次数的公共模块，这里默认2次
              priority: -20,
              reuseExistingChunk: true // 是否重用已存在的chunk
            }
          }
        }
      }
```

