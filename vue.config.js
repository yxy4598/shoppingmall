// 配置 vue 文件的别名

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    hotOnly: false,
    disableHostCheck: true
  }
}
