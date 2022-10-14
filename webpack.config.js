const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    console.log('env? ', env)
    return {
        mode: 'development',
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devtool: 'source-map'
    }
}