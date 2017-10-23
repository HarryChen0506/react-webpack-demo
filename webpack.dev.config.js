//webpack dev环境配置

const path = require('path');

module.exports = {
    //入口
    entry: path.join(__dirname,'src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        // 输出到dist文件夹
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],  //cacheDirectory缓存编译结果加速
            include: path.join(__dirname, './src')
        }]
    }
}
