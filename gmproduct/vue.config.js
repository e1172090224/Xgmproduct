module.exports = {
    devServer: {
        proxy: {
            '/apis':{
                pathRewrite: { '^/apis': '' },
                target: 'http://192.168.42.239:10081', // 访问数据的计算机域名
                changOrigin: true
            }
        },
        disableHostCheck: true,
    }
};
