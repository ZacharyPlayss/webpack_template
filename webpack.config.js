const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        clean:true,
        assetModuleFilename: 'assets/images/[name].[ext]'
    },
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'src')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|webp)$/i,
                type:'asset/resource',
            },
            {
                test:/\.html$/,
                use: [
                  'html-loader'
                ]
              },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html', 
        })
    ]
}
