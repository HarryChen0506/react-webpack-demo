//webpack dev环境配置

const path = require('path');
const webpack = require('webpack')

module.exports = {
    //入口
    entry:[
        'react-hot-loader/patch',
        path.join(__dirname,'src/index.js')
    ], 
    output: {
        path: path.join(__dirname, './dist'),
        // 输出到dist文件夹
        filename: 'bundle.js'
    },
    devServer:{   //webpack-dev-server配置
        contentBase: path.join(__dirname, './dist'), //服务器URL的根目录
        port: '8088',
        host: '0.0.0.0',  //支持ip来访问页面，否则只能通过localhost:8088来访问
        historyApiFallback: true,  //所有404页面能跳转到index.html
        proxy: {
            '/api': {
                target: 'https://www.baidu.com',
                pathRewrite: {'^/api' : ''},  //重写HTTP请求，其主要作用就是移除URL前面的/api部分               
            }
        },
        hot: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],  //cacheDirectory缓存编译结果加速
            include: path.join(__dirname, './src')
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
